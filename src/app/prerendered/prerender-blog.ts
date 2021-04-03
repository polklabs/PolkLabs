import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Blogs
import rngEncodingJson from 'src/assets/json/blogs/rng-encoding.json';
import bitSimulatorSerializationJson from 'src/assets/json/blogs/bit-simulator-serialization.json';
import nonogramSolverJson from 'src/assets/json/blogs/nonogram-solver.json';

@Component({
  selector: 'app-prerender-blog',
  template: '<app-blog [data]="data" [id]="id"></app-blog>',
  styles: ['']
})
export class PrerenderBlogComponent {

  data = undefined;
  id = '';

  constructor(
      route: ActivatedRoute
  ) {
      this.id = route.snapshot.paramMap.get('id');      

      switch(this.id) {
        case 'rng-encoding':
            this.data = rngEncodingJson;
            break;
        case 'bit-simulator-serialization':
            this.data = bitSimulatorSerializationJson;
            break;
        case 'nonogram-solver':
            this.data = nonogramSolverJson;
            break;
      }
  }

}
