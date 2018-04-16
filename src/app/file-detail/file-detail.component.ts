import { Component, OnInit, Input } from '@angular/core';
import { File } from '../model/file';

@Component({
  selector: 'app-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrls: ['./file-detail.component.css']
})
export class FileDetailComponent implements OnInit {
  @Input() file: File;

  constructor() { }

  ngOnInit() {
  }

}
