import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatDividerModule,
    MatTooltipModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatDividerModule,
        MatTooltipModule,
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatDividerModule,
        MatTooltipModule,
    ]
})
export class MaterialModule {}
