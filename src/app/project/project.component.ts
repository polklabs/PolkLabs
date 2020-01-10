import { Component, OnInit, AfterViewChecked, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewChecked {

  editPage = false;
  production = environment.production;

  id: string;
  data: any;
  sectionTitles: string[] = [];
  fragment: string;

  showCards = false;
  olderProject: any = null;
  newerProject: any = null;

  loading = true;

  projectList: any;

  constructor(
    private httpService: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {

      let top = document.getElementById('top');
      if (top !== null) {
        top.scrollIntoView();
        top = null;
      }

      this.id = params.id;
      this.httpService.get(`./assets/json/projects/${params.id}.json`).pipe(take(1)).subscribe(
        (data: any) => {
          if (data !== undefined) {
            this.data = data;
            this.sectionTitles = data.sections.filter(x => x.type === 'header').map(x => x.text);
            this.loading = false;
          }
        }
      );
    });

    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

  }

  ngAfterViewChecked(): void {
    try {
      if (this.fragment) {
        if (this.sectionTitles.map(x => this.getId(x)).indexOf(this.fragment) === 0) {
          document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        } else {
          document.querySelector('#' + this.fragment).scrollIntoView({ behavior: 'smooth' });
        }
        this.fragment = '';
      }
    } catch (e) { }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.showCards = window.innerWidth > 1300;
  }

  openPage(url: string) {
    window.open(url, '_blank');
  }

  getId(text: string) {
    return text.replace(/\ /g, '');
  }

  printUpdate(output: any) {
    console.log(output);
  }

}
