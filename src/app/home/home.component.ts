import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutModel } from '../shared/models/about.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: AboutModel;
  projectList: any;
  blogList: any;

  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit() {

    this.httpService.get(`./assets/json/about.json`).subscribe(
      (data: AboutModel) => {
        this.data = data;
      }
    );

    this.httpService.get(`./assets/json/projectList.json`).subscribe(
      (data: any) => {
        this.projectList = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
      }
    );

    this.httpService.get(`./assets/json/blogList.json`).subscribe(
      (data: any) => {
        this.blogList = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
      }
    );

  }

}
