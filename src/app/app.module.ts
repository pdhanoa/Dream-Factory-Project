import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './mainwebsite/product-list.component';
import { ReferralPageComponent } from './referral-page/referral-page.component';
import { DonationPageComponent } from './donation-page/donation-page.component';
import { WaysToHelpComponent } from './ways-to-help-page/ways-to-help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      {path: "waystohelp/referral"
    , component: ReferralPageComponent},
      {path: "waystohelp/donation", component: DonationPageComponent},
      {path: "waystohelp", component: WaysToHelpComponent},
      {path: "about", component: AboutUsComponent},
      {path: "events", component: EventsComponent}, 
      {path: "contactus", component: ContactUsComponent}
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ReferralPageComponent,
    DonationPageComponent,
    WaysToHelpComponent,
    AboutUsComponent,
    EventsComponent,
    ContactUsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/