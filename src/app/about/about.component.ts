import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileDownloadService } from '../core/service/file-download.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: any;
  loading = true;

  constructor(
    private httpService: HttpClient,
    private fileDownloadService: FileDownloadService
  ) { }

  ngOnInit() {
    this.httpService.get(`./assets/json/about.json`).subscribe(
      (data: any[]) => {
        this.data = data;
        this.loading = false;
      }
    );
  }

  downloadFile(url: string) {
    this.fileDownloadService.downloadFile(url, 'application/pdf');
  }

}
