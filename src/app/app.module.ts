import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { FilesComponent } from './components/files/files.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FilesService } from './services/files.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DirectoryComponent,
    FilesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
