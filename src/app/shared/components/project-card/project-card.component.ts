import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import projectListJson from 'src/assets/json/projectList.json';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: any;
  @Input() id;

  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit() {
    if (this.id !== undefined) {
      if (projectListJson !== undefined) {
        this.project = projectListJson.find(x => x.id === this.id);
      }
    }
  }

}
