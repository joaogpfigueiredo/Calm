import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public planType: boolean = false;

  public planName: any[] = [];
  public features1: any[] = [];
  public features2: any[] = [];
  public features3: any[] = [];
  public plan1: any[] = [];
  public plan2: any[] = [];
  public plan3: any[] = [];

  ngOnInit() {
    this.updatePlans();
  }

  togglePlanType() {
    this.planType = !this.planType;
    this.updatePlans();
  }

  private updatePlans() {
    this.planName = [
      { name: this.planType ? 'Monthly' : 'Normal' },
      { name: this.planType ? 'Quarterly' : 'Big' },
      { name: this.planType ? 'Annualy' : 'Familiar' }
    ];

    this.features1 = [
      this.planType ? '2 livros por mês' : 'Recebe 2 livros',
      this.planType ? 'Escolha de 1 tema de livros' : 'Escolha de 1 tema de livros',
      this.planType ? 'Livros Extra' : 'Entrega Gratuita',
      this.planType ? 'Edições Especiais' : 'Acesso a um clube de leitura'
    ];

    this.features2 = [
      this.planType ? '2 livros por mês' : 'Recebe 4/5 livros',
      this.planType ? 'Escolha de 4 tema de livros' : 'Escolha de 2 temas de livros',
      this.planType ? 'Livros Extra' : 'Entrega Gratuita',
      this.planType ? 'Edições Especiais' : 'Acesso a um clube de leitura'
    ];

    this.features3 = [
      this.planType ? '2 livros por mês' : 'Recebe 9/10 livros',
      this.planType ? 'Escolha de 12 tema de livros' : 'Escolha de 5 temas de livros',
      this.planType ? 'Livros Extra' : 'Entrega Gratuita',
      this.planType ? 'Edições Especiais' : 'Acesso a um clube de leitura'
    ];

    this.plan1 = this.features1.map((feature, index) => ({ name: feature, available: index < 2 }));
    this.plan2 = this.features2.map((feature, index) => ({ name: feature, available: index < 3 }));
    this.plan3 = this.features3.map(feature => ({ name: feature, available: true }));
  }
}
