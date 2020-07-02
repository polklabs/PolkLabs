import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input() blog;
  @Input() id;

  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit() {
    if (this.id !== undefined) {
      this.httpService.get(`./assets/json/blogList.json`).subscribe(
        (data: any[]) => {
          if (data !== undefined) {
            this.blog = data.find(x => x.id === this.id);
          }
        }
      );
    }
  }

}
