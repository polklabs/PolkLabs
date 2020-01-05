import { Component, Input } from '@angular/core';
import { VideoModel } from '../../models/video.model';

@Component({
  selector: 'app-video-tmpl',
  templateUrl: './video-tmpl.component.html',
  styleUrls: ['./video-tmpl.component.scss']
})
export class VideoTmplComponent {

  @Input() section: VideoModel;
  @Input() id: string;
  @Input() project: boolean = false;

}
