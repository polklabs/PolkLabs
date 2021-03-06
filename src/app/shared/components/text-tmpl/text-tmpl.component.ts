import { Component, Input } from '@angular/core';
import { TextModel } from '../../models/text.model';

@Component({
  selector: 'app-text-tmpl',
  templateUrl: './text-tmpl.component.html',
  styleUrls: ['./text-tmpl.component.scss']
})
export class TextTmplComponent {

  @Input() section: TextModel;

}
