import { Component, OnInit } from '@angular/core';
import { File } from '../model/file';
import { FileService } from '../file.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  files: File[];

  constructor(private fileService: FileService) { }

  getFiles(): void {
    this.fileService.getFiles().subscribe(files => this.files=files);
  }
  ngOnInit() {
    this.getFiles();
  }

}
 