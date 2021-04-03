import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Blogs
import reelRatingsJson from 'src/assets/json/projects/reel-ratings.json';
import pixelMatrixGameJson from 'src/assets/json/projects/pixel-matrix-game.json';
import textGeneratorJson from 'src/assets/json/projects/text-generator.json';
import chitChatJson from 'src/assets/json/projects/chit-chat.json';
import navalPostgraduateSchoolJson from 'src/assets/json/projects/naval-postgraduate-school.json';
import drowsinessDetectorJson from 'src/assets/json/projects/drowsiness-detector.json';
import bitSimulatorJson from 'src/assets/json/projects/bit-simulator.json';

@Component({
  selector: 'app-prerender-project',
  template: '<app-project [data]="data" [id]="id"></app-project>',
  styles: ['']
})
export class PrerenderProjectComponent {

  data = undefined;
  id = '';

  constructor(
      route: ActivatedRoute
  ) {
      this.id = route.snapshot.paramMap.get('id');      

      switch(this.id) {
        case 'reel-ratings':
            this.data = reelRatingsJson;
            break;
        case 'pixel-matrix-game':
            this.data = pixelMatrixGameJson;
            break;
        case 'text-generator':
            this.data = textGeneratorJson;
            break;
        case 'chit-chat':
            this.data = chitChatJson;
            break;
        case 'naval-postgraduate-school':
            this.data = navalPostgraduateSchoolJson;
            break;
        case 'drowsiness-detector':
            this.data = drowsinessDetectorJson;
            break;
        case 'bit-simulator':
            this.data = bitSimulatorJson;
            break;
      }
  }

}
