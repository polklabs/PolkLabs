import { Component, OnInit } from '@angular/core';
import { FileDownloadService } from '../core/service/file-download.service';
import { AboutModel } from '../shared/models/about.model';

import aboutJson from 'src/assets/json/about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: AboutModel;
  loading = true;

  constructor(
    private fileDownloadService: FileDownloadService
  ) { }

  ngOnInit() {
    if (aboutJson !== undefined) {
      this.data = aboutJson;
      this.loading = false;
    }
  }

  downloadFile(url: string) {
    this.fileDownloadService.downloadFile(url, 'application/pdf');
  }

}
