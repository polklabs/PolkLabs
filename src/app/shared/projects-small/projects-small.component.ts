import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects-small',
  templateUrl: './projects-small.component.html',
  styleUrls: ['./projects-small.component.scss']
})
export class ProjectsSmallComponent implements OnInit {

  @Input() headerText = 'Some of my other work';
  @Input() id: string;

  projectList: any;

  constructor(
    private httpService: HttpClient,
  ) { }

  ngOnInit() {
    this.httpService.get(`./assets/json/projectList.json`).pipe(take(1)).subscribe(
      (data: any[]) => {
        const projectList = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.projectList = projectList
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .filter(x => x.id !== this.id)
        .slice(0, 3);
      }
    );
  }

}
