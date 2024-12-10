import { Component, Input } from '@angular/core';

@Component({
  selector: 'plan-card',
  templateUrl: './plan-card.component.html',
  styleUrl: './plan-card.component.css'
})
export class PlanCardComponent {

  @Input() title: string = '';
  @Input() features: { name: string; available: boolean }[] = [];

}
