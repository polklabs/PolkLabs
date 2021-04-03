import { Component, OnInit, AfterViewChecked, HostListener, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { take, catchError, skip } from 'rxjs/operators';
import { of } from 'rxjs';
import { SEOService } from '../core/service/seo.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewChecked {
  
  @Input() id: string;
  @Input() data: any = undefined;
  sectionTitles: string[] = [];
  fragment: string;

  showCards = false;
  olderProject: any = null;
  newerProject: any = null;

  loading = true;
  error = false;

  projectList: any;

  constructor(
    private httpService: HttpClient,
    private route: ActivatedRoute,
    private seoService: SEOService,
  ) { }

  ngOnInit() {
    let skipParam = 0;

    if (this.data !== undefined) {
      this.afterJsonLoaded();
      skipParam = 1;
    }

    this.route.params.pipe(skip(skipParam)).subscribe(params => {
      this.loading = true;
      this.data = undefined;

      let top = document.getElementById('top');
      if (top !== null) {
        top.scrollIntoView();
        top = null;
      }

      this.id = params.id;
      console.log("Params: " + this.id);
      this.httpService.get(`./assets/json/projects/${params.id}.json`)
        .pipe(take(1),
          catchError(e => {
            this.error = true;
            return of(undefined);
          }))
        .subscribe(
        (data: any) => {
          if (data !== undefined) {
            this.data = data;
            this.afterJsonLoaded();
          }
        }
      );
    });

    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

  }

  afterJsonLoaded(): void {
    this.sectionTitles = this.data.sections.filter(x => x.type === 'header').map(x => x.text);

    this.seoService.updateTitle(`Polklabs | ${this.data.title}`);
    this.seoService.updateDescription(this.data.meta);

    this.loading = false;
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

}
