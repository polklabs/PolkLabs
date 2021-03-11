import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent {

  constructor(
    public dialogRef: MatDialogRef <PictureComponent>,
    @Inject(MAT_DIALOG_DATA) public passedData: any
  ) { }

  close() {
    this.dialogRef.close();
  }

}
