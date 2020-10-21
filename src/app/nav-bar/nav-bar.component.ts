import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  /*templateUrl: './nav-bar.component.html',*/
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isActive = false;

  toogleIsActive(): void {
    this.isActive = !this.isActive;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
