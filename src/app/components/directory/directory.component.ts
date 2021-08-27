import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { File } from "src/app/idatas";
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  @Input() index: number;
  name: string;
  img: string;
  files: File[];

  @Output() displayFiles: EventEmitter<DirectoryComponent>;

  display: boolean;

  constructor(private _filesService: FilesService) { 
    this.index = -1;
    this.name = "";
    this.img =  "";
    this.files = [];
    this.display = false;

    this.displayFiles = new EventEmitter<DirectoryComponent>();
  }

  ngOnInit() {
    this.name = this._filesService.getDirectory(this.index).name;
    this.img =  this._filesService.getDirectory(this.index).img;
    this.files = this._filesService.getDirectory(this.index).files;
  }

  showFiles() {
    this.display = !this.display;
    this.displayFiles.emit(this);
  }

}
