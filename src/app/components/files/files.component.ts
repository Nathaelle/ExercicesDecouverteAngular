import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Directory, File } from 'src/app/idatas';
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

  displayPdf: boolean;
  fileToDisplay: File;
  secureUrl: SafeResourceUrl;

  constructor(private _filesService: FilesService, private _s: DomSanitizer) { 
    this.directories = [];
    this.displayPdf = false;
    this.fileToDisplay = <File>{};
    this.secureUrl = <SafeResourceUrl>{};
  }

  ngOnInit() {
    this._filesService.getDirectories().subscribe( datas => { 
      this.directories = datas;
    });
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

  showPdf(index: number) {

    if(this.current != null) {
      this.fileToDisplay = this.current.files[index];
      this.secureUrl = this._s.bypassSecurityTrustResourceUrl(this.fileToDisplay.path);
      this.displayPdf = true;
    }
  }

  close() {
    this.displayPdf = false;
    this.fileToDisplay = <File>{};
  }

}