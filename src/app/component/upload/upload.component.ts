import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  // @ts-ignore
  selectedFile: File[];
  // @ts-ignore
  ref: AngularFireStorageReference;
  downloadURL: string[] = [];
  checkUploadFile = false;
  @Output()
  givenURLtoCreate = new EventEmitter<string>();

  constructor(private angularFireStore: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  onFileChange($event: Event): void {
    // @ts-ignore
    this.selectedFile = $event.target.files;
  }

  onUpload(): void {
    this.checkUploadFile = true;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.selectedFile.length; i++) {
      const name = this.selectedFile[i].name;
      this.ref = this.angularFireStore.ref(name);
      this.ref.put(this.selectedFile[i])
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(downloadURL => {
          this.givenURLtoCreate.emit(downloadURL);
          this.checkUploadFile = false;
        })
        .catch(error => {
          console.log(`Failed to upload avatar and get link ${error}`);
        });
    }
  }

}
