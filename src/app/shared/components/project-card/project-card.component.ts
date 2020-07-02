import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
      this.httpService.get(`./assets/json/projectList.json`).subscribe(
        (data: any[]) => {
          console.log(data);
          if (data !== undefined) {
            this.project = data.find(x => x.id === this.id);
          }
        }
      );
    }
  }

}
