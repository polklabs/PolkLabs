import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'Polklabs | Home',
            description: 'the homepage to Andrew Polk\'s portfolio website'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            title: 'Polklabs | About',
            description: 'About Andrew Polk, with resume, experience and skills'
        }
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        data: {
            title: 'Polklabs | Projects',
            description: 'List of projects Andrew Polk has worked on'
        }
    },
    {
        path: 'project/:id',
        component: ProjectComponent
    },
    {
        path: 'blog',
        component: BlogsComponent,
        data: {
            title: 'Polklabs | Blogs',
            description: 'List of blog Andrew Polk has made'
        }
    },
    {
        path: 'blog/:id',
        component: BlogComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false, scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}