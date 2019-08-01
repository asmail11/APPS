import { Component, OnInit } from '@angular/core';
import {HttpResponse, HttpClient, HttpEventType, HttpClientModule} from '@angular/common/http';
import { UploadFileService } from './upload-file.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UploadFileService, HttpClient, HttpClientModule]
})
export class AppComponent implements OnInit {
  title = 'ng-upload-spring';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 }

  constructor(private uploadService: UploadFileService) {}

  ngOnInit(){}

  selectFile(event){
    this.selectedFiles = event.target.files;
  }
  upload(){
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
       if(event.type === HttpEventType.UploadProgress){
         this.progress.percentage = Math.round(100 * event.loaded / event.total);
       } else if(event instanceof HttpResponse){
        console.log('File is completely uploaded !');
      }
    });
    this.selectedFiles = undefined;
  }
}
