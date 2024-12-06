import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public isBurgerExpanded: boolean = false;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
      window.addEventListener('resize', () => this.checkScreenSize());
    }
  } 

  checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.isBurgerExpanded = false;
    } else {
      this.isBurgerExpanded = true;
    }
  }

  burgerExpand() {

    this.isBurgerExpanded = !this.isBurgerExpanded;

  }

}
