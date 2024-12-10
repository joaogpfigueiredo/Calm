import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './General/home/home.component';
import { ProductComponent } from './General/product/product.component';
import { SignupComponent } from './General/signup/signup.component';
import { SigninComponent } from './General/signin/signin.component';
import { PrivacyPolicyComponent } from './Policy/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './Policy/cookie-policy/cookie-policy.component';
import { TermsAndConditionsComponent } from './Policy/terms-and-conditions/terms-and-conditions.component';
import { PointsComponent } from './General/points/points.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'cookie-policy',
    component: CookiePolicyComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'earnpoints',
    component: PointsComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
