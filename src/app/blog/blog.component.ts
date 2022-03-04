import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { skip, take } from 'rxjs/operators';
import { SEOService } from '../core/service/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() id: string;
  @Input() data: any = undefined;
  sectionTitles: string[] = [];
  fragment: string;

  loading = true;

  projectList: any;

  path = '';

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

      let top = document.getElementById('top');
      if (top !== null) {
        top.scrollIntoView();
        top = null;
      }

      this.path = window.location.pathname;
      this.id = params.id;
      this.httpService.get(`./assets/json/blogs/${params.id}.json`).pipe(take(1)).subscribe(
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

    this.seoService.updateTitle(`${this.data.title} | Polklabs`);
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

  getId(text: string) {
    return text.replace(/\ /g, '');
  }
}
