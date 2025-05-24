import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener, inject } from '@angular/core';
import { TuiAppearance, TuiButton, TuiDialogContext, TuiDialogService, TuiDialogSize, TuiHint } from '@taiga-ui/core';
import type { PolymorpheusContent } from '@taiga-ui/polymorpheus';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [ TuiButton, TuiAppearance,
    TuiHint, RouterLink],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TareasComponent {

  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.scrolled = offset > 400;
  }

  ngOnInit() {
    this.onWindowScroll();
  }

  scrollTo(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  private readonly dialogs = inject(TuiDialogService);

  protected dialogOpen(
    content: PolymorpheusContent<TuiDialogContext>,
    header: PolymorpheusContent,
    size: TuiDialogSize,
  ): void {
    this.dialogs
      .open(content, {
        header,
        size,
        closeable: false,
      })
      .subscribe();
  }


}
