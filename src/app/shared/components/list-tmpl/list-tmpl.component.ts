import { Component, Input } from '@angular/core';
import { ListModel } from '../../models/list.model';

@Component({
  selector: 'app-list-tmpl',
  templateUrl: './list-tmpl.component.html',
  styleUrls: ['./list-tmpl.component.scss']
})
export class ListTmplComponent {

  @Input() section: ListModel;

}
