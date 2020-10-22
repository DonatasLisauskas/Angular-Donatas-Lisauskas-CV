import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  /*templateUrl: './nav-bar.component.html',*/
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  showLinksInBurger = true;
  showContacts = false;
  toogleShowLinksInBurger(): void {
    this.showLinksInBurger = !this.showLinksInBurger;
  }
  toogleShowContacts(): void {
    this.showContacts = !this.showContacts;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
