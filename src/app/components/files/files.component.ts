import { Component, OnInit } from '@angular/core';
import { DirectoryComponent } from '../directory/directory.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  directories: Directory[];
  current?: DirectoryComponent;

  constructor() { 
    this.directories = [];
  }

  ngOnInit() {
    this.directories = [
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
    ]
  }

  setCurrent(current: DirectoryComponent) {
    if(this.current != null) {
      this.current.display = false;
    }
    if(current.display) {
      this.current = current;
    } else {
      this.current = null;
    }
  }

}

interface Directory {
  name: string;
  img: string;
  files: File[];
}

interface File {
  name: string;
  path: string;
  created_at: Date;
}
