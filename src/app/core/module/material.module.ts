import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule, 
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatDividerModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatDividerModule,
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatDividerModule,
    ]
})
export class MaterialModule {}