import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  opened = true;
  mode: string;

  constructor( private router: Router ) {}

  ngOnInit() {
    this.onRes();
    this.if500();
  }

  onRes() {
    this.mode = document.getElementById('sidenav').getAttribute('mode');
    if (window.innerWidth < 800) {
      this.mode = 'over';
    } else {
      this.mode = 'side';
    }
  }

  if500() {
    if (window.innerWidth < 500) {
      this.opened = false;
    }
  }

  routeDir(item) {
    this.router.navigate(['panel/', item]);
    this.if500();
  }

}