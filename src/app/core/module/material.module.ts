import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule, 
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
    ]
})
export class MaterialModule {}