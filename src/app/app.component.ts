import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  mapa!: Mapboxgl.Map;

  ngOnInit() {
    
    this.mapa = new Mapboxgl.Map({
      accessToken: environment.mapboxKey,
      container: 'mapa-mapbox', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-75.76, 45.35], // starting position
      zoom: 16.6 // starting zoom
    });

    this.crearMarcador(-75.76, 45.35);

  }

  crearMarcador(lng: number, lat: number){
    const marker = new Mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([lng, lat])
    .addTo(this.mapa);

    marker.on('drag', () =>{
      console.log(marker.getLngLat())
    })
  }
}