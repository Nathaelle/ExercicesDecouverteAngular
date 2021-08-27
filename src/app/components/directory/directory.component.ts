import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Directory, File } from "src/app/idatas";
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  directory: Directory;

  @Input() index: number;
  name: string;
  img: string;
  files: File[];

  @Output() displayFiles: EventEmitter<DirectoryComponent>;

  display: boolean;

  constructor(private _filesService: FilesService) { 
    this.directory = <Directory>{};
    this.index = -1;
    this.name = "";
    this.img =  "";
    this.files = [];
    this.display = false;

    this.displayFiles = new EventEmitter<DirectoryComponent>();
  }

  ngOnInit() {
    this._filesService.getDirectories().subscribe( datas => { 
      this.directory = datas[this.index];
      this.name = this.directory.name;
      this.img =  this.directory.img;
      this.files = this.directory.files;
    } );
    
  }

  showFiles() {
    this.display = !this.display;
    this.displayFiles.emit(this);
  }

}
