import { Component, OnInit } from '@angular/core';
import { AboutModel } from '../shared/models/about.model';

import blogListJson from 'src/assets/json/blogList.json';
import aboutJson from 'src/assets/json/about.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: AboutModel;
  projectList: any;
  blogList: any;

  constructor() { }

  ngOnInit() {

    if (aboutJson !== undefined) {
      this.data = aboutJson;
    }

    if (blogListJson !== undefined) {
      this.blogList = blogListJson.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
    }

  }

}
