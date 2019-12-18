import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule } from 'ngx-highlightjs';

// export function getHighlightLanguages() {
//     return {
//       typescript: () => import('highlight.js/lib/languages/typescript'),
//       css: () => import('highlight.js/lib/languages/css'),
//       xml: () => import('highlight.js/lib/languages/xml')
//     };
// }

@NgModule({
    imports: [
        FlexLayoutModule,
        MaterialModule,
        HttpClientModule,
        ClipboardModule,
        HighlightModule,
    ],
    exports: [
        FlexLayoutModule,
        MaterialModule,
        HttpClientModule,
        ClipboardModule,
        HighlightModule,
    ],
    providers: [
    ]
})
export class CoreModule {}
