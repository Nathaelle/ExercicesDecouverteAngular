import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Output() displayFiles: EventEmitter<DirectoryComponent>;

  display: boolean;

  constructor() { 
    this.index = -1;
    this.name = "";
    this.img = "";
    this.files = [];
    this.display = false;

    this.displayFiles = new EventEmitter<DirectoryComponent>();
  }

  ngOnInit() {
  }

  showFiles() {
    this.display = !this.display;
    this.displayFiles.emit(this);
  }

}
