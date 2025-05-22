import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  scrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    this.scrolled = offset > 400;
  }

  ngOnInit() {
    this.onWindowScroll();
  }
}
