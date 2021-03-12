import { Component, OnInit } from '@angular/core';
import blogListJson from 'src/assets/json/blogList.json';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogList: any;
  loading = true;

  constructor() { }

  ngOnInit() {

    if (blogListJson !== undefined) {
      this.blogList = blogListJson.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.loading = false;
    }

  }

}
