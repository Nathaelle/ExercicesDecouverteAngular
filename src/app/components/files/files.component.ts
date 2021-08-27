import { Component, OnInit } from '@angular/core';
import { Directory } from 'src/app/idatas';
import { FilesService } from 'src/app/services/files.service';
import { DirectoryComponent } from '../directory/directory.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  directories: Directory[];
  current?: DirectoryComponent;

  constructor(private _filesService: FilesService) { 
    this.directories = [];
  }

  ngOnInit() {
    this.directories = this._filesService.getDirectories();
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