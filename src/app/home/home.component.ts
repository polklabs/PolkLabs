import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AboutModel } from '../shared/models/about.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: AboutModel;

  constructor(
    private httpService: HttpClient
  ) { }

  ngOnInit() {

    this.httpService.get(`./assets/json/about.json`).subscribe(
      (data: AboutModel) => {
        this.data = data;
      }
    );

  }

}
