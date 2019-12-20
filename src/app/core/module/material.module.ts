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
    MatMenuModule,
    MatIconModule,
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
        MatMenuModule,
        MatIconModule,
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
        MatMenuModule,
        MatIconModule,
    ]
})
export class MaterialModule {}
