import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  style = "orange-text";

  name: string;
  firstname: string;
  email: string;
  directories: Array<Directory>;

  connected: boolean;

  constructor() { 

    this.name = "Kinsleigh";
    this.firstname = "Alice";
    this.email = "test2@gmail.com";

    this.connected = false;

    this.directories = [
      {
        name: "Projets en cours",
        date: new Date()
      },
      {
        name: "Boîte à idées",
        date: new Date()
      },
      {
        name: "Factures",
        date: new Date()
      },
      {
        name: "Devis",
        date: new Date()
      }
    ];

  }

  ngOnInit() {
  }

  changeColor() {

    if (this.style === "blue-text") {
      this.style = "orange-text";
    } else {
      this.style = "blue-text";
    }
  }

}

type Directory = {
  name: string;
  date: Date;
}
