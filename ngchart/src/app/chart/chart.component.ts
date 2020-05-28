import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public csvPath = 'assets/aide-aux-festivals-de-musiques-actuelles-et-amplifiees-2011-2013.csv';
  public type = 'ville';

  public villes: any[] = [];
  public departement: any[] = [];
  public annees: any[] = [];
  public montants: any[] = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = null;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getInfo() {
    return this.http.get(this.csvPath, { responseType: 'text' });
  }

  getData() {
    this.getInfo().subscribe(data => {
      let csvToRowArray = data.split("\n");

      //initialiser les annees
      for (let index = 1; index < csvToRowArray.length - 1; index++) {
        let row = csvToRowArray[index].split(";");
        let annee = parseInt(row[0]);
        if (this.annees.indexOf(annee) === -1) {
          this.annees.push(annee);
          this.departement[annee] = [];
          this.villes[annee] = [];
          this.montants[annee] = [];
        }
      }

      //renseigner les valeurs par annees
      for (let index = 1; index < csvToRowArray.length - 1; index++) {
        let row = csvToRowArray[index].split(";");
        let annee = parseInt(row[0]);
        this.departement[annee].push(row[7]);
        this.villes[annee].push(row[12]);
        this.montants[annee].push(row[8]);
      }

    },
      error => {
        console.log(error);
      },
      () => {
        this.showData();
      }
    );
  }

  showData() {
    for (let index = 0; index < this.annees.length; index++) {
      let annee = this.annees[index];
      setTimeout(function () {
        if (this.type == 'departement') {
          this.barChartLabels = this.departement[annee];
        } else {
          this.barChartLabels = this.villes[annee];
        }

        this.barChartData = [
          {
            data: this.montants[annee], label: annee
          }
        ];
      }.bind(this), index * 4000);
      //boucler
      //if (index == (this.annees.length - 1)) index = 0;
    }
  }

  onSelectionChange(type: string) {
    this.type = type;
    this.clearAllTimeOut();
    this.showData();
  }

  clearAllTimeOut() {
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
  }

}
