import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: any;

  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit() {
    this.httpService.get(`./assets/json/header.json`).subscribe(
      (data: any[]) => {
        this.header = data;
      }
    );
  }

}
