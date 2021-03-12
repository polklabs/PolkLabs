import { Component, OnInit } from '@angular/core';

import projectListJson from 'src/assets/json/projectList.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList: any;
  loading = true;

  constructor() { }

  ngOnInit() {
    if (projectListJson !== undefined) {
      this.projectList = projectListJson.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.loading = false;
    }
  }

}
