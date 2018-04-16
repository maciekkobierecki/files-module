import { Component, OnInit } from '@angular/core';
import { File } from '../model/file';
import FILES from '../model/files-mock';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  files=FILES;
  constructor() { }

  ngOnInit() {
  }

}
