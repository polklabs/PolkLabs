import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { take } from 'rxjs/operators';
import { CodeModel } from '../../models/code.model';

@Component({
  selector: 'app-code-tmpl',
  templateUrl: './code-tmpl.component.html',
  styleUrls: ['./code-tmpl.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CodeTmplComponent implements OnInit {

  @Input() section: CodeModel;

  codeBody = 'Loading File...';
  copied = false;

  constructor(
    private httpService: HttpClient
  ) {}

  ngOnInit(): void {    
    if (this.section.fileLocation === undefined) {
      this.codeBody = this.section.code
    } else {
      this.httpService.get(`./assets/content/${this.section.fileLocation}`, {responseType:'text'}).pipe(take(1)).subscribe(
        (data: any) => {
          if (data !== undefined) {
            this.codeBody = data;
          } else {
            this.codeBody = 'Error Loading File.';
          }
        }
      );
    }
    
  }

}
