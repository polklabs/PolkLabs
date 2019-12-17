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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
