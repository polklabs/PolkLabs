import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoLinkModel } from '../../models/video-link.model';

@Component({
  selector: 'app-video-link-tmpl',
  templateUrl: './video-link-tmpl.component.html',
  styleUrls: ['./video-link-tmpl.component.scss']
})
export class VideoLinkTmplComponent {

  @Input() section: VideoLinkModel;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  sanitizeURL(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
