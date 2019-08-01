import { AgmCoreModule } from '@agm/core';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map.component';


@NgModule({
  declarations: [GoogleMapComponent],
  imports: [
    CommonModule      
  ]
  
})
export class GoogleMapModule { }
