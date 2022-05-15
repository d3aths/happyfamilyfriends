import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ServicesListComponent } from './components/services-list/services-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddServiceComponent,
    ServiceDetailsComponent,
    ServicesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
