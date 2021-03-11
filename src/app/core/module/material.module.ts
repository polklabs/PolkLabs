import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

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
