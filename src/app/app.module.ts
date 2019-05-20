import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Module as Angular2ManagementLibraryModule} from 'angular2-management-library';
import { InnerNavigationComponent } from './inner-navigation/inner-navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RegSuppliersComponent } from './reg-suppliers/reg-suppliers.component';
import { KYCComponent } from './kyc/kyc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BillingComponent } from './billing/billing.component';
import { EventsComponent } from './events/events.component';
import { DomainsComponent } from './domains/domains.component';
import { DnsComponent } from './dns/dns.component';
import { IssuedValidationsComponent } from './issued-validations/issued-validations.component';

@NgModule({
  declarations: [
    AppComponent,
    InnerNavigationComponent,
    NotificationsComponent,
    RegSuppliersComponent,
    KYCComponent,
    DashboardComponent,
    BillingComponent,
    EventsComponent,
    DomainsComponent,
    DnsComponent,
    IssuedValidationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2ManagementLibraryModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
