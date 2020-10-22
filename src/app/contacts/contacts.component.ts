import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts = {city: 'City: Kaunas', email: 'Email: donliskas@gmail.com', phone: 'Phone: +37063855525'};

  constructor() { }

  ngOnInit(): void {
  }

}
