import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';

import data from './../../assets/data.json';

import {Heatmap as HeatmapLayer} from 'ol/layer';
import VectorSource from 'ol/source/Vector';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';

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

  jsonData : Array<any>;
  jsonPoint : any;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {

    // STEP 3
    var vectorData = new VectorSource;

    for (let i = 0; i < data.length; i++) {
      //console.log(data[i].fields.montant_vote);

      this.jsonData = data[i].fields.wgs84;
      this.jsonPoint = fromLonLat(this.jsonData);

      var ftbl = this.jsonPoint;
      var lonLat = new Point(ftbl);

      var pointFeature = new Feature({
      geometry: lonLat,
      weight: data[i].fields.montant_vote
      });
      
      vectorData.addFeature(pointFeature);
    } 
    

    var hmLayer = new HeatmapLayer({
      source: vectorData,
      radius: 10
    });

  //map2.addLayer(hmLayer);

    var layer = new TileLayer({
      source: new OSM()
    });
    
    var map2 = new Map({
      target: 'map2',
      layers: [layer, hmLayer],
      view: new View({
        center: this.focus,
        zoom: 9
      })
    });

  }
}