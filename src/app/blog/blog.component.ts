import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { SEOService } from '../core/service/seo.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  id: string;
  data: any;
  sectionTitles: string[] = [];
  fragment: string;

  loading = true;

  projectList: any;

  constructor(
    private httpService: HttpClient,
    private route: ActivatedRoute,
    private seoService: SEOService,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = params.id;
      this.httpService.get(`./assets/json/blogs/${params.id}.json`).pipe(take(1)).subscribe(
        (data: any) => {
          if (data !== undefined) {
            this.data = data;
            this.sectionTitles = data.sections.filter(x => x.type === 'header').map(x => x.text);

            this.seoService.updateTitle(`Polklabs | ${data.title}`);
            this.seoService.updateDescription(data.meta);

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

  getId(text: string) {
    return text.replace(/\ /g, '');
  }
}
