import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bar-chart1',
  templateUrl: './bar-chart1.component.html',
  styleUrls: ['./bar-chart1.component.css']
})
  
//   // public barChartOptions = {
//   //   scaleShowVerticalLines: false,
//   //   responsive: true
//   // };
//   // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
//   // public barChartType = 'bar';
//   // public barChartLegend = true;
//   // public barChartData = [
//   //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
//   //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
//   // ];


export class BarChart1Component implements OnInit {

  configUrl ='src/assets/data.json'
  data : any = [];
  
  constructor(private http: HttpClient) { }


  
  getConfig() {
    return this.http.get(this.configUrl);
  }

  ngOnInit(): void { 
  // console.log(data);
  for(var i = 0; i < data.length; i++) {
    var obj = data[i];
    console.log(obj.fields.adresse_administrative_code_departement_du_tiers_beneficiaire);
  }  
  }
}



 
