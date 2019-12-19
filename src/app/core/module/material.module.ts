import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatDividerModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
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
        MatSnackBarModule,
        MatDialogModule,
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatGridListModule,
        MatDividerModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatDialogModule,
    ]
})
export class MaterialModule {}
