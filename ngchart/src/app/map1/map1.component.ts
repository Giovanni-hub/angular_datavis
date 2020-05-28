import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

import Overlay from 'ol/Overlay';

import data from './../../assets/data.json';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.css']
})
export class Map1Component implements OnInit {

  map : Map;
  marker : any;

  paris : any = fromLonLat([2.3488, 48.8534]);

  data : Array<any>;
  jsonCoor : any = data[0].fields.wgs84.reverse();
  jsonPos : any = fromLonLat(this.jsonCoor);

  constructor() { 
    
  }

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {

    // STEP 1 & 2

    var layer = new TileLayer({
      source: new OSM()
    });
    
    var map = new Map({
      target: 'map',
      layers: [layer],
      view: new View({
        center: this.paris,
        zoom: 9
      })
    });
    
    // Paris marker
    var marker = new Overlay({
      position: this.paris,
      positioning: 'center-center',
      element: document.getElementById('paris'),
      stopEvent: false
    });

    map.addOverlay(marker);


    // Markers from JSON
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      this.jsonCoor = data[i].fields.wgs84.reverse();
      this.jsonPos = fromLonLat(this.jsonCoor);

      var part1 = document.getElementById("part1");
      var element = document.createElement("div");
      element.id = "el" + i;
      element.className = "marker";
      part1.appendChild(element);
    
      var newDot = new Overlay({
        position: this.jsonPos,
        positioning: 'center-center',
        element: document.getElementById("el" + i),
        stopEvent: false
      });

      map.addOverlay(newDot);
    }
    
  }

}