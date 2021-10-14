import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private statusSource = new BehaviorSubject(0);
  currentStatus = this.statusSource.asObservable();
  constructor() { }

  changeStatus(status: number) {
    this.statusSource.next(status);
  }
}
