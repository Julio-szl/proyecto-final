import { Routes } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: NavComponent}
];
