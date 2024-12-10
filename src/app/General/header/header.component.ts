import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public isBurgerExpanded: boolean = true;

  constructor(private translateService: TranslateService) { this.translateService.use("en"); }

  burgerExpand() {

    this.isBurgerExpanded = !this.isBurgerExpanded;

  }

  changeLanguage(event: Event) {
    const language = (event.target as HTMLSelectElement).value;
    this.translateService.use(language);
    debugger
  }

}
