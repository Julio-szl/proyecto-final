import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavComponent } from '../../../shared/nav/nav.component';

@Component({
  selector: 'app-main-proyectos',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './main-proyectos.component.html',
  styleUrl: './main-proyectos.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainProyectosComponent {

}
