import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileDownloadService } from '../core/service/file-download.service';
import { AboutModel } from '../shared/models/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: AboutModel;
  loading = true;

  constructor(
    private httpService: HttpClient,
    private fileDownloadService: FileDownloadService
  ) { }

  ngOnInit() {
    this.httpService.get(`./assets/json/about.json`).subscribe(
      (data: AboutModel) => {
        this.data = data;
        this.loading = false;
      }
    );
  }

  downloadFile(url: string) {
    this.fileDownloadService.downloadFile(url, 'application/pdf');
  }

}
