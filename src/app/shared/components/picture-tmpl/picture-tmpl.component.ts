import { Component, Input } from '@angular/core';
import { PictureModel } from '../../models/picture.model';
import { PictureComponent } from '../../modal/picture/picture.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-picture-tmpl',
  templateUrl: './picture-tmpl.component.html',
  styleUrls: ['./picture-tmpl.component.scss']
})
export class PictureTmplComponent {

  @Input() section: PictureModel;
  @Input() id: string;
  @Input() project = false;

  constructor(
    private dialog: MatDialog
  ) {}

  openPictureModal(url: string) {
    const modalData = {
      height: 'auto',
      width: 'auto',
      maxHeight: '100%',
      maxWidth: '100%',
      disableClose: false,
      autoFocus: false,
      data: url
    };
    this.dialog.open(PictureComponent, modalData);
  }

}
