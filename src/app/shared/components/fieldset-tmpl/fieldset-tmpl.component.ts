import { Component, ViewChild, TemplateRef, Input } from '@angular/core';
import { FieldsetModel } from '../../models/fieldset.model';

@Component({
  selector: 'app-fieldset-tmpl',
  templateUrl: './fieldset-tmpl.component.html',
  styleUrls: ['./fieldset-tmpl.component.scss']
})
export class FieldsetTmplComponent {

  @Input() section: FieldsetModel;
  @Input() id: string;
  @Input() project = false;
  @Input() edit = false;

}
