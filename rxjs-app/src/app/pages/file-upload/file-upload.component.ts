import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/operator/toPromise';
import {FileUpload} from '../../interfaces/FileUpload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileUploads: Observable<FileUpload>[] = [];

  constructor() { }

  ngOnInit() {
  }

  uploadFiles(files: any) {
    files.forEach((file) => {
      this.fileUploads.push(this.uploadFile(file));
    });
  }

  uploadFile(file: any) {
    const data = new FormData();
    data.append('file', file, file.name);

    const request = new XMLHttpRequest();
    let progress = {
      loaded: 0,
      total: 1,
      percent: 0
    };

    const behaviorSubject = new BehaviorSubject<FileUpload>({
      file: file,
      xhrObject: request,
      progress: progress
    });

    request.upload.addEventListener('progress', (event: any) => {
      if (!event.lengthComputable) {
        return;
      }

      const percent = parseInt(((event.loaded / event.total) * 100).toFixed(0));

      progress = {
        loaded: event.loaded,
        total: event.total,
        percent: percent
      };

      behaviorSubject.next({
        file: file,
        xhrObject: request,
        progress: progress
      });
    });

    request.onreadystatechange = () => {
      if (request.readyState === XMLHttpRequest.DONE) {
        progress = Object.assign({}, progress, { loaded: progress.total });
        behaviorSubject.next({
          file: file,
          xhrObject: request,
          progress: progress
        });
        behaviorSubject.complete();
      }
    };

    request.open('POST', 'http://localhost:9001/fileupload');
    request.send(data);

    return behaviorSubject;
  }
}
