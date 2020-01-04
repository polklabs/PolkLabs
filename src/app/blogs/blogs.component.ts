import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  projectList: any;
  loading = true;

  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit() {

    this.httpService.get(`./assets/json/projectList.json`).subscribe(
      (data: any[]) => {
        if (data !== undefined) {
          this.projectList = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          this.loading = false;
        }
      }
    );

  }

}
