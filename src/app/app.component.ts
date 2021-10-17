import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  mapa: Mapboxgl.Map;

  ngOnInit() {
    
    Mapboxgl.accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position
      zoom: 9 // starting zoom
    });
  }
}