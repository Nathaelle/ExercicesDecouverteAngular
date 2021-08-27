import { Injectable } from '@angular/core';
import { Directory } from '../idatas';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private _directories: Directory[]; 

  constructor() {
    this._directories = [
      {
        name: "Projets en cours",
        img: "/assets/img/folder.png",
        files : [
          {
            name: "Gestionnaire de planning",
            path: "/assets/pdf/planning.pdf",
            created_at: new Date()
          }
        ]
      },
      {
        name: "Documentations",
        img: "/assets/img/folder.png",
        files : [
          {
            name: "Angular",
            path: "/assets/pdf/angular.pdf",
            created_at: new Date()
          }
        ]
      },
      {
        name: "Facturation",
        img: "/assets/img/folder.png",
        files : [
          {
            name: "Dupond Jean (26/08/2021)",
            path: "/assets/pdf/dupond_Jean_2021-08-26.pdf",
            created_at: new Date()
          }
        ]
      }
    ];
   } 

  getDirectory(index: number): Directory {
    return this._directories[index]; 
  }

  getDirectories() { 
    return this._directories;
  }
}