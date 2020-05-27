import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoLinkModel } from '../../models/video-link.model';

@Component({
  selector: 'app-video-link-tmpl',
  templateUrl: './video-link-tmpl.component.html',
  styleUrls: ['./video-link-tmpl.component.scss']
})
export class VideoLinkTmplComponent implements OnInit {

  @Input() section: VideoLinkModel;

  url: SafeResourceUrl | string = '';

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.url = this.sanitizeURL(this.section.src);
  }

  sanitizeURL(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
