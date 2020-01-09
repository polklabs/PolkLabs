import { Component, ViewChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-tmpl-wrapper',
  templateUrl: './tmpl-wrapper.component.html',
  styleUrls: ['./tmpl-wrapper.component.scss']
})
export class TmplWrapperComponent {

  @ViewChild('sectionTmpl', {static: true}) sectionTmpl: TemplateRef<any>;
  @ViewChild('headerTmpl', {static: true}) headerTmpl: TemplateRef<any>;
  @ViewChild('textTmpl', {static: true}) textTmpl: TemplateRef<any>;
  @ViewChild('listTmpl', {static: true}) listTmpl: TemplateRef<any>;
  @ViewChild('picTmpl', {static: true}) picTmpl: TemplateRef<any>;
  @ViewChild('gridTmpl', {static: true}) picGridTmpl: TemplateRef<any>;
  @ViewChild('dictTmpl', {static: true}) dictTmpl: TemplateRef<any>;
  @ViewChild('fieldTmpl', {static: true}) fieldTmpl: TemplateRef<any>;
  @ViewChild('codeTmpl', {static: true}) codeTmpl: TemplateRef<any>;
  @ViewChild('htmlTmpl', {static: true}) htmlTmpl: TemplateRef<any>;
  @ViewChild('videoTmpl', {static: true}) videoTmpl: TemplateRef<any>;
  @ViewChild('videoLinkTmpl', {static: true}) videoLinkTmpl: TemplateRef<any>;

  @Input() section: any;
  @Input() id: string;
  @Input() project = false;
  @Input() edit = false;

  getTemplate(type: string) {
    switch(type) {
      case 'section':
        return this.sectionTmpl;
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
      case 'video':
        return this.videoTmpl;
      case 'videoLink':
        return this.videoLinkTmpl;
    }
    return null;
  }

}
