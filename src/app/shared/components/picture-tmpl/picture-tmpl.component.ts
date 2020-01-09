import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PictureModel } from '../../models/picture.model';
import { PictureComponent } from '../../modal/picture/picture.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-picture-tmpl',
  templateUrl: './picture-tmpl.component.html',
  styleUrls: ['./picture-tmpl.component.scss']
})
export class PictureTmplComponent {

  @Input() section: PictureModel;
  @Input() id: string;
  @Input() project = false;
  @Input() edit = false;
  @Output() updateSection = new EventEmitter<PictureModel>();

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
