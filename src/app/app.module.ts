import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { FilesComponent } from './components/files/files.component';
import { HomeComponent } from './components/home/home.component';
import { FilesService } from './services/files.service';
import { AppRoutingModule } from './app-routing.module';
import { GamesComponent } from './components/games/games.component';
import { DemineurComponent } from './components/demineur/demineur.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DirectoryComponent,
    FilesComponent,
    HomeComponent,
    GamesComponent,
    DemineurComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
