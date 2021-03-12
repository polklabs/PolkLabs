import { Component, Input, OnInit } from '@angular/core';

import blogListJson from 'src/assets/json/blogList.json';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() blog;
  @Input() id;

  constructor() { }

  ngOnInit() {
    if (this.id !== undefined) {
      if (blogListJson !== undefined) {
        this.blog = blogListJson.find(x => x.id === this.id);
      }
    }
  }

}
