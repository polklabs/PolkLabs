import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { mergeMap, filter, map } from 'rxjs/operators';
import { SEOService } from './core/service/seo.service';
import { getHtmlTagDefinition } from '@angular/compiler';
import { environment } from 'src/environments/environment';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SEOService,
  ) {
    if (environment.production === true) {
      const navEndEvent$ = router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      );
      navEndEvent$.subscribe((e: NavigationEnd) => {
        gtag('config', 'UA-173704342-1', { 'page_path' : e.urlAfterRedirects});
      });
    }
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
    .subscribe((event) => {
      if (event.title !== undefined) {
        const id = this.getTitle(this.router.routerState, this.router.routerState.root);

        this.seoService.updateTitle(event.title + (id.length > 0 ? (' | ' + id[0]) : ''));
        this.seoService.updateDescription(event.title + ' ' + event.description);
      }
    });
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      if (parent.snapshot.params.id) {
        data.push(parent.snapshot.params.id);
      }
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

}
