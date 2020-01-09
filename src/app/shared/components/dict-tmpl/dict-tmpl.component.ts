import { Component, Input } from '@angular/core';
import { DictModel } from '../../models/dict.model';

@Component({
  selector: 'app-dict-tmpl',
  templateUrl: './dict-tmpl.component.html',
  styleUrls: ['./dict-tmpl.component.scss']
})
export class DictTmplComponent {

  @Input() section: DictModel;
  @Input() edit = false;

}
