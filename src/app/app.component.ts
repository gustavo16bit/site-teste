import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'site-teste';

  lat: number = -23.2345604;
  lng: number = -51.1634645;
  zoom: number = 15;

 
}
