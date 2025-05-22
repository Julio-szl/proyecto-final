import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent implements AfterViewInit{


  swiperElement: SwiperContainer | null = null;

  constructor() {
    register();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const swiperElementConstructor = document.querySelector('swiper-container');
      const swiperOptions: SwiperOptions = {
        slidesPerView: 3,
        loop: true,
        autoplay: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1366: {
            slidesPerView: 3,
          }
        },
        virtual: {
          enabled: true,
          cache: true,
        },
        preventClicks: true,
      }
      Object.assign(swiperElementConstructor!, swiperOptions);
      this.swiperElement = swiperElementConstructor;
      this.swiperElement?.initialize();
    }, 300);
  }

}
