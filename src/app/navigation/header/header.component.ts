import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import headerJson from 'src/assets/json/header.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: any;

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {

    if (headerJson !== undefined) {
      this.header = headerJson;
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', { duration: 2000, verticalPosition: 'top'});
  }

}
