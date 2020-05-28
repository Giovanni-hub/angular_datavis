import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

import Overlay from 'ol/Overlay';

import data from './../../assets/data.json';

import {Heatmap as HeatmapLayer} from 'ol/layer';
import Stamen from 'ol/source/Stamen';
import VectorSource from 'ol/source/Vector';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css']
})
export class Map2Component implements OnInit {

  // STEP 3

  map2 : Map;
  focus : any = fromLonLat([2.3488, 48.8534]);

  data : Array<any>;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {

    // STEP 3

    var heatmap = new HeatmapLayer({
      source: new VectorSource({
        pos: fromLonLat([2.3488, 48.8534]),
      }),
      weight: 1
    });

    var layer = new TileLayer({
      source: new OSM()
    });
    
    var map2 = new Map({
      target: 'map2',
      layers: [layer, heatmap],
      view: new View({
        center: this.focus,
        zoom: 9
      })
    });
    
  }

}