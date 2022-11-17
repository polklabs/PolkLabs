import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PrerenderBlogComponent } from './prerendered/prerender-blog';
import { PrerenderProjectComponent } from './prerendered/prerender-project';

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
            title: 'Projects | Polklabs',
            description: 'List of projects Andrew Polk has worked on'
        }
    },
    {
        path: 'project/:id',
        component: PrerenderProjectComponent
    },
    {
        path: 'blogs',
        component: BlogsComponent,
        data: {
            title: 'Blogs | Polklabs',
            description: 'List of blog Andrew Polk has made'
        }
    },
    {
        path: 'blog/:id',
        component: PrerenderBlogComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false, scrollPositionRestoration: 'top', initialNavigation: 'enabled', relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}