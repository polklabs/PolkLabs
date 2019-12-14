import { Component, Input } from '@angular/core';
import { CodeModel } from '../../models/code.model';

@Component({
  selector: 'app-code-tmpl',
  templateUrl: './code-tmpl.component.html',
  styleUrls: ['./code-tmpl.component.scss']
})
export class CodeTmplComponent {

  @Input() section: CodeModel;

}
