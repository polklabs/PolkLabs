import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: any;

  constructor(
    private httpService: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.httpService.get(`./assets/json/header.json`).subscribe(
      (data: any[]) => {
        this.header = data;
      }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', { duration: 2000, verticalPosition: 'top'});
  }

}
