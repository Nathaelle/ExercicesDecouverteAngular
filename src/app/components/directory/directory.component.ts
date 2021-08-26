import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  @Input() index: number;
  @Input() name: string;
  @Input() img: string;
  @Input() files: File[];

  constructor() { 
    this.index = -1;
    this.name = "";
    this.img = "";
    this.files = [];
  }

  ngOnInit() {
  }

}
