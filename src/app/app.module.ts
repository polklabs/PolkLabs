import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/module/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/module/shared.module';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './navigation/header/header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProjectsSmallComponent } from './shared/projects-small/projects-small.component';
import { BrowserModule } from '@angular/platform-browser';
import { PrerenderBlogComponent } from './prerendered/prerender-blog';
import { PrerenderProjectComponent } from './prerendered/prerender-project';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    BlogComponent,
    BlogsComponent,
    ProjectsSmallComponent,

    PrerenderBlogComponent,
    PrerenderProjectComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
