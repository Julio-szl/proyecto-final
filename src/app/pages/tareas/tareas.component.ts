import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { NavComponent } from '../../shared/nav/nav.component';
import { TuiAppearance, TuiButton, TuiDialogContext, TuiDialogService, TuiDialogSize, TuiHint } from '@taiga-ui/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [NavComponent, TuiButton, TuiAppearance, TuiHint],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class TareasComponent {

  scrollTo(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  dialogs = inject(TuiDialogService);

  protected dialogOpen(
    content: PolymorpheusContent<TuiDialogContext>,
    header: PolymorpheusContent,
    size: TuiDialogSize,
  ): void {
    this.dialogs
      .open(content, {
        header,
        size,
        closeable: false
      })
      .subscribe();
  }

}