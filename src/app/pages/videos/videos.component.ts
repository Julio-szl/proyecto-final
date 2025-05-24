import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { TuiHint } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [TuiHint, RouterLink],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VideosComponent {

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

}
