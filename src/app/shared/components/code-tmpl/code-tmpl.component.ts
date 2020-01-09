import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { CodeModel } from '../../models/code.model';

@Component({
  selector: 'app-code-tmpl',
  templateUrl: './code-tmpl.component.html',
  styleUrls: ['./code-tmpl.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeTmplComponent {

  @Input() section: CodeModel;
  @Input() edit = false;
  @Output() updateSection = new EventEmitter<CodeModel>();

  copied = false;

  constructor() {}

}
