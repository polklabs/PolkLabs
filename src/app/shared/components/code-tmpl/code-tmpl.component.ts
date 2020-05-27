import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CodeModel } from '../../models/code.model';

@Component({
  selector: 'app-code-tmpl',
  templateUrl: './code-tmpl.component.html',
  styleUrls: ['./code-tmpl.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeTmplComponent {

  @Input() section: CodeModel;

  copied = false;

  constructor() {}

}
