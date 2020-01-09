import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderModel } from '../../models/header.model';

@Component({
  selector: 'app-header-tmpl',
  templateUrl: './header-tmpl.component.html',
  styleUrls: ['./header-tmpl.component.scss']
})
export class HeaderTmplComponent {

  @Input() section: HeaderModel;
  @Input() edit = false;
  @Output() updateSection = new EventEmitter<HeaderModel>();

  getId(text: string) {
    return text.replace(/\ /g, '');
  }

}
