import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { VideosComponent } from './pages/videos/videos.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'tareas', component: TareasComponent},
    {path: 'videos', component: VideosComponent}
];
