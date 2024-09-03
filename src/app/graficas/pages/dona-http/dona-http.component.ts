import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor( private graficasServices: GraficasService) { }

  ngOnInit(): void {


    this.graficasServices.getUsuariosRedesSociales()
      .subscribe( datas => {
        console.log(datas);
        this.doughnutChartData = {
          labels: Object.keys(datas),
          datasets: [{ data:Object.values(datas)}]
        };
      });

     /*
    this.graficasServices
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, datasets }) => {
         console.log(data);
        this.doughnutChartData = { labels, datasets };
    }); */

  }






}
