import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  subscribeToNewsletter(email: string) {
    
    alert(`Thank you for subscribing with email: ${email}`);
  }
}
