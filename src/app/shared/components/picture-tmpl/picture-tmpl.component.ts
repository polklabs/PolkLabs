import { Component, Input } from '@angular/core';
import { PictureModel } from '../../models/picture.model';

@Component({
  selector: 'app-picture-tmpl',
  templateUrl: './picture-tmpl.component.html',
  styleUrls: ['./picture-tmpl.component.scss']
})
export class PictureTmplComponent {

  @Input() section: PictureModel;
  @Input() id: string;

}
