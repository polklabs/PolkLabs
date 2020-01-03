import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Home | Polklabs',
            description: 'the homepage to Andrew Polk\'s portfolio website'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'About | Polklabs',
            description: 'About Andrew Polk, with resume, experience and skills'
        }
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        data: {
            title: 'Home | Polklabs',
            description: 'List of projects Andrew Polk has worked on'
        }
    },
    {
        path: 'project/:id',
        component: ProjectComponent,
        data: {
            title: 'Polklabs',
            description: 'Some project'
        }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}