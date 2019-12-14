import { Component, OnInit, ViewChild, TemplateRef, AfterViewChecked, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewChecked {

  @ViewChild('headerTmpl', {static: true}) headerTmpl: TemplateRef<any>;
  @ViewChild('textTmpl', {static: true}) textTmpl: TemplateRef<any>;
  @ViewChild('listTmpl', {static: true}) listTmpl: TemplateRef<any>;
  @ViewChild('picTmpl', {static: true}) picTmpl: TemplateRef<any>;
  @ViewChild('picGridTmpl', {static: true}) picGridTmpl: TemplateRef<any>;
  @ViewChild('dictTmpl', {static: true}) dictTmpl: TemplateRef<any>;
  @ViewChild('fieldTmpl', {static: true}) fieldTmpl: TemplateRef<any>;
  @ViewChild('codeTmpl', {static: true}) codeTmpl: TemplateRef<any>;
  @ViewChild('htmlTmpl', {static: true}) htmlTmpl: TemplateRef<any>;

  id: string;
  data: any;
  sectionTitles: string[] = [];
  fragment: string;

  showCards = false;
  olderProject: any = null;
  newerProject: any = null;

  constructor(
    private httpService: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.httpService.get(`./assets/json/${params['id']}.json`).pipe(take(1)).subscribe(
        (data: any) => {
          this.data = data;
          this.id = data.id;
          this.sectionTitles = data.sections.filter(x => x.type === 'header').map(x => x.text);
          this.loadProjectLinks();
        }
      );
    })

    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });

  }

  ngAfterViewChecked(): void {
    try {
        if(this.fragment) {
            document.querySelector('#' + this.fragment).scrollIntoView({behavior: "smooth"});
            this.fragment = '';
        }
    } catch (e) { }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.showCards = window.innerWidth > 1300;
  }

  loadProjectLinks() {
    this.httpService.get(`./assets/json/projectList.json`).subscribe(
      (data: any[]) => {
        const projectList = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        const currentIndex = projectList.findIndex(x => x.id === this.id);

        if (currentIndex > 0) {
          this.newerProject = projectList[currentIndex - 1];
        } else{
          this.newerProject = null;
        }

        if (currentIndex < projectList.length) {
          this.olderProject = projectList[currentIndex + 1];
        } else {
          this.olderProject = null;
        }
      }
    );
  }

  openPage(url: string) {
    window.open(url, '_blank');
  }

  getTemplate(type: string) {
    switch(type) {
      case 'header':
        return this.headerTmpl;
      case 'text':
        return this.textTmpl;
      case 'list':
        return this.listTmpl;
      case 'pic':
        return this.picTmpl;
      case 'grid':
        return this.picGridTmpl;
      case 'dict':
        return this.dictTmpl;
      case 'fieldset':
        return this.fieldTmpl;
      case 'code':
        return this.codeTmpl;
      case 'html':
        return this.htmlTmpl;
    }
    return null;
  }

  getId(text: string) {
    return text.replace(/\ /g, '');
  }

}
