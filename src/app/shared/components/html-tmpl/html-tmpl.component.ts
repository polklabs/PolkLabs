import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HTMLModel } from '../../models/html.model';

@Component({
  selector: 'app-html-tmpl',
  templateUrl: './html-tmpl.component.html',
  styleUrls: ['./html-tmpl.component.scss']
})
export class HtmlTmplComponent {

  @Input() section: HTMLModel;
  @Input() edit = false;
  @Output() updateSection = new EventEmitter<HTMLModel>();

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
