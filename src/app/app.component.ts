import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  current: Onglet;
  onglets: Onglet[];

  constructor() {
    this.onglets = [];
    this.current = <Onglet>{};
  }

  ngOnInit(): void {
    
    this.onglets = [
      {
        name: "Home",
        selector: "home",
        active: true
      },
      {
        name: "Mes fichiers",
        selector: "files",
        active: false
      },
      {
        name: "Gérer mes informations",
        selector: "infos",
        active: false
      }
    ];
    this.current = this.onglets[0];
  }

  setCurrent(index: number) {

    this.current.active = false;
    this.onglets[index].active = true;
    this.current = this.onglets[index];

  }

}

interface Onglet {
  name: string,
  selector: string,
  active: boolean
}