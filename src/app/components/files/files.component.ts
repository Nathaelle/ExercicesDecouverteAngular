import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  directories: Directory[];

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
            name: "Gestionnaire de planning",
            path: "/assets/pdf/planning.pdf",
            created_at: new Date()
          }
        ]
      },
      {
        name: "Facturation",
        img: "/assets/img/folder.png",
        files : [
          {
            name: "Gestionnaire de planning",
            path: "/assets/pdf/planning.pdf",
            created_at: new Date()
          }
        ]
      }
    ]
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
