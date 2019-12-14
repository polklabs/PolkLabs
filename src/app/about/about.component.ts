import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data: any;
  loading = true;

  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit() {
    this.httpService.get(`./assets/json/about.v2.json`).subscribe(
      (data: any[]) => {
        this.data = data;
        this.loading = false;
      }
    );
  }

}
