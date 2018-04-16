import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilesComponent } from './files/files.component';
import { FileDetailComponent } from './file-detail/file-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    FileDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
