import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calm';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.smoothScrollToTop();
      }
    });
  }

  smoothScrollToTop() {
    if (typeof window !== 'undefined') {
      const start = window.scrollY;
      const distance = -start;
      const duration = 500;
      let startTime: number | null = null;
  
      const animateScroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
  
        const timeElapsed = timestamp - startTime!;
        const run = this.easeInOutQuad(timeElapsed, start, distance, duration);
  
        window.scrollTo(0, run);
  
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };
  
      requestAnimationFrame(animateScroll);
    }
  }

  easeInOutQuad(time: number, start: number, change: number, duration: number): number {
    time /= duration / 2;
    if (time < 1) return (change / 2) * time * time + start;
    time--;
    return (-change / 2) * (time * (time - 2) - 1) + start;
  }
}
