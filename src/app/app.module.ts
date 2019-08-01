import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core'
import { GoogleMapModule } from './google-map/google-map.module';
import { NgxSimpleCountdownModule } from "ngx-simple-countdown";
import { GoogleMapComponent } from './google-map/google-map.component';



@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxSimpleCountdownModule,   
    AgmCoreModule.forRoot({ apiKey:'AIzaSyDQS6MdrWayy_mgK0QGvdMUHB1aDyMpUyk' })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
