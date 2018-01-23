import { Component, Input, OnInit } from '@angular/core';
import {FileUpload} from '../../interfaces/FileUpload';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  @Input() fileUpload: FileUpload;

  constructor() { }

  ngOnInit() {
  }

}
