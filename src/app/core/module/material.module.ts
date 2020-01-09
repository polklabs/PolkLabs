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
    MatInputModule,
    MatSlideToggleModule,
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
        MatInputModule,
        MatSlideToggleModule,
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
        MatInputModule,
        MatSlideToggleModule,
    ]
})
export class MaterialModule {}
