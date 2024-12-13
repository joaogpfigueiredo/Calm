import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.updatePlans();

    this.translate.onLangChange.subscribe(() => {
      this.updatePlans();
    });
  }

  togglePlanType() {
    this.planType = !this.planType;
    this.updatePlans();
  }

  private updatePlans() {
    this.planName = [
      this.translate.instant(this.planType ? 'Prod.Quarterly' : 'Prod.Normal'),
      this.translate.instant(this.planType ? 'Prod.SemiAnnual' : 'Prod.Big'),
      this.translate.instant(this.planType ? 'Prod.Annually' : 'Prod.Family')
    ];

    this.features1 = [
      this.translate.instant(this.planType ? 'Prod.QuarterlyFeature1' : 'Prod.NormalFeature1'),
      this.translate.instant(this.planType ? 'Prod.QuarterlyFeature2' : 'Prod.NormalFeature2'),
      this.translate.instant(this.planType ? 'Prod.QuarterlyFeature3' : 'Prod.NormalFeature3'),
      this.translate.instant(this.planType ? 'Prod.QuarterlyFeature4' : 'Prod.NormalFeature4')
    ];

    this.features2 = [
      this.translate.instant(this.planType ? 'Prod.SemiAnnualFeature1' : 'Prod.BigFeature1'),
      this.translate.instant(this.planType ? 'Prod.SemiAnnualFeature2' : 'Prod.BigFeature2'),
      this.translate.instant(this.planType ? 'Prod.SemiAnnualFeature3' : 'Prod.BigFeature3'),
      this.translate.instant(this.planType ? 'Prod.SemiAnnualFeature4' : 'Prod.BigFeature4')
    ];

    this.features3 = [
      this.translate.instant(this.planType ? 'Prod.AnnuallyFeature1' : 'Prod.FamilyFeature1'),
      this.translate.instant(this.planType ? 'Prod.AnnuallyFeature2' : 'Prod.FamilyFeature2'),
      this.translate.instant(this.planType ? 'Prod.AnnuallyFeature3' : 'Prod.FamilyFeature3'),
      this.translate.instant(this.planType ? 'Prod.AnnuallyFeature4' : 'Prod.FamilyFeature4')
    ];

    this.plan1 = this.features1.map((feature, index) => ({ name: feature, available: index < 2 }));
    this.plan2 = this.features2.map((feature, index) => ({ name: feature, available: index < 3 }));
    this.plan3 = this.features3.map(feature => ({ name: feature, available: true }));
  }
}
