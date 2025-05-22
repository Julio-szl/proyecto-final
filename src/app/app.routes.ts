import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';
import { MainProyectosComponent } from './pages/Proyectos/main-proyectos/main-proyectos.component';
import { MainTareasComponent } from './pages/Tareas/main-tareas/main-tareas.component';
import { VideosComponent } from './pages/videos/videos.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'proyectos', component: MainProyectosComponent},
    {path: 'tareas', component: MainTareasComponent},
    {path: 'videos', component: VideosComponent}
];
