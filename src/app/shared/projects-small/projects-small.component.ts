import { Component, OnInit, Input } from '@angular/core';

import projectListJson from 'src/assets/json/projectList.json';

@Component({
  selector: 'app-projects-small',
  templateUrl: './projects-small.component.html',
  styleUrls: ['./projects-small.component.scss']
})
export class ProjectsSmallComponent implements OnInit {

  @Input() headerText = 'Some of my other projects';
  @Input() id: string;

  projectList: any;

  constructor() { }

  ngOnInit() {
    if (projectListJson !== undefined) {
      const projectList = projectListJson.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.projectList = projectList
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .filter(x => x.id !== this.id)
      .slice(0, 3);
    }
  }

}
