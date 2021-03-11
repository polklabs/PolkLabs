import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { FormsModule } from '@angular/forms';

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
        FormsModule,
    ],
    exports: [
        FlexLayoutModule,
        MaterialModule,
        HttpClientModule,
        ClipboardModule,
        HighlightModule,
        FormsModule,
    ],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                fullLibraryLoader:() => import('highlight.js'),
            }
        }
    ]
})
export class CoreModule {}
