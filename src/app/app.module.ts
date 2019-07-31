import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core'
import { GoogleMapModule } from './google-map/google-map.module';
import { NgxSimpleCountdownModule } from "ngx-simple-countdown";



@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSimpleCountdownModule,
    GoogleMapModule,
    AgmCoreModule.forRoot({ apiKey:'AIzaSyDQS6MdrWayy_mgK0QGvdMUHB1aDyMpUyk' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
