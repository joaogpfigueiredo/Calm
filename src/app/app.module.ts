import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanCardComponent } from './reusable-components/plan-card/plan-card.component';
import { HeaderComponent } from './General/header/header.component';
import { FooterComponent } from './General/footer/footer.component';
import { SignupComponent } from './General/signup/signup.component';
import { SigninComponent } from './General/signin/signin.component';
import { HomeComponent } from './General/home/home.component';
import { ProductComponent } from './General/product/product.component';
import { InfoCardComponent } from './reusable-components/info-card/info-card.component';
import { PrivacyPolicyComponent } from './Policy/privacy-policy/privacy-policy.component';
import { CookiePolicyComponent } from './Policy/cookie-policy/cookie-policy.component';
import { TermsAndConditionsComponent } from './Policy/terms-and-conditions/terms-and-conditions.component';
import { PointsComponent } from './General/points/points.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PlanCardComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ProductComponent,
    InfoCardComponent,
    PrivacyPolicyComponent,
    CookiePolicyComponent,
    TermsAndConditionsComponent,
    PointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
