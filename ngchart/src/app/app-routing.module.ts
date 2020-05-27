import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChart1Component } from './bar-chart1/bar-chart1.component';



const routes: Routes = [
  {path: 'bar-chart1', component: BarChart1Component},
  // {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  // {path: 'radar-chart', component: MyRadarChartComponent},
  // {path: 'pie-chart', component: MyPieChartComponent},
   {path: '**', component: BarChart1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
