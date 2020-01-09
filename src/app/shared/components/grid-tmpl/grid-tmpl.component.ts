import { Component, Input } from '@angular/core';
import { GridModel } from '../../models/grid.model';

@Component({
  selector: 'app-grid-tmpl',
  templateUrl: './grid-tmpl.component.html',
  styleUrls: ['./grid-tmpl.component.scss']
})
export class GridTmplComponent {

  @Input() section: GridModel;
  @Input() id: string;
  @Input() project = false;
  @Input() edit = false;

}
