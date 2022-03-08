import { Component} from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] ,
        backgroundColor: ['#E65C38','#FC7730', '#F28F2E'],
        hoverBackgroundColor: ['#E666E4','#FF78B9','#F25F5E']
      },
      
      /*{ data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }*/
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


}
