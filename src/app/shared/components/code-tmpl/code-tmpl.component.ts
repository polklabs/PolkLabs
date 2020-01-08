import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CodeModel } from '../../models/code.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-code-tmpl',
  templateUrl: './code-tmpl.component.html',
  styleUrls: ['./code-tmpl.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeTmplComponent {

  @Input() section: CodeModel;

  constructor(
    private snackBar: MatSnackBar,
  ) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', { duration: 2000, verticalPosition: 'bottom'});
  }

}
