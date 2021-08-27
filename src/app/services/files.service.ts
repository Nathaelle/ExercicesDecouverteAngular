import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Directory } from '../idatas';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private _url = "/assets/datas/directories.json";

  constructor(private _httpClient: HttpClient) {} 

  getDirectories(): Observable<Directory[]> { 
    return this._httpClient.get<Directory[]>(this._url);
  }
}
