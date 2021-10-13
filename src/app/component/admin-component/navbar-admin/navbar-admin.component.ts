import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
}
