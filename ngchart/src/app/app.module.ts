import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChart1Component } from './bar-chart1/bar-chart1.component';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    BarChart1Component,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
