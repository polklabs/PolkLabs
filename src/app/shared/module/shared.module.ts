import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { MaterialElevationDirective } from '../directive/material.elevation.directive';
import { HeaderTmplComponent } from '../components/header-tmpl/header-tmpl.component';
import { TextTmplComponent } from '../components/text-tmpl/text-tmpl.component';
import { ListTmplComponent } from '../components/list-tmpl/list-tmpl.component';
import { PictureTmplComponent } from '../components/picture-tmpl/picture-tmpl.component';
import { GridTmplComponent } from '../components/grid-tmpl/grid-tmpl.component';
import { DictTmplComponent } from '../components/dict-tmpl/dict-tmpl.component';
import { FieldsetTmplComponent } from '../components/fieldset-tmpl/fieldset-tmpl.component';
import { CodeTmplComponent } from '../components/code-tmpl/code-tmpl.component';
import { HtmlTmplComponent } from '../components/html-tmpl/html-tmpl.component';
import { CoreModule } from 'src/app/core/module/core.module';
import { TmplWrapperComponent } from '../components/tmpl-wrapper/tmpl-wrapper.component';
import { VideoTmplComponent } from '../components/video-tmpl/video-tmpl.component';
import { VideoLinkTmplComponent } from '../components/video-link-tmpl/video-link-tmpl.component';

@NgModule({
    declarations: [
        MaterialElevationDirective,
        HeaderTmplComponent,
        TextTmplComponent,
        ListTmplComponent,
        PictureTmplComponent,
        GridTmplComponent,
        DictTmplComponent,
        FieldsetTmplComponent,
        CodeTmplComponent,
        HtmlTmplComponent,
        TmplWrapperComponent,
        VideoTmplComponent,
        VideoLinkTmplComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        CoreModule
    ],
    exports: [
        CommonModule,
        BrowserModule,
        MaterialElevationDirective,
        HeaderTmplComponent,
        TextTmplComponent,
        ListTmplComponent,
        PictureTmplComponent,
        GridTmplComponent,
        DictTmplComponent,
        FieldsetTmplComponent,
        CodeTmplComponent,
        HtmlTmplComponent,
        TmplWrapperComponent
    ],
    providers: []
})
export class SharedModule { }
