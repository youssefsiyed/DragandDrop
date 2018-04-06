import { Component, OnInit } from '@angular/core';
import { Solts } from '../../models/Solts';
import { SoltsService } from '../../services/solts.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  chart = []; // This will hold our chart info

  constructor(private soltsService : SoltsService) { }

  ngOnInit() {
    this.soltsService.chartsSolts()
      .subscribe(res => {
        let temp_max = res['list'].map(res => res.main.temp_max);
        let temp_min = res['list'].map(res => res.main.temp_min);
        let alldates = res['list'].map(res => res.dt);
        let pressure = res['list'].map(res => res.main.pressure);
        let humidity = res['list'].map(res => res.main.humidity);
        let speed    = res['list'].map(res => res.wind.speed);
        
        let weatherDates = []
        alldates.forEach((res) => {
            let jsdate = new Date(res * 1000)
            weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })
        //////////////////////////////////////////////////////////
        this.chart = new Chart('canvas', {
          type: 'polarArea',
          data: {
            labels: weatherDates,
            datasets: [
              { 
                data: humidity,
                borderColor: "#ff2771",
                fill: false
              },
              { 
                data: temp_max,
                borderColor: "#ff6384",
                fill: false
              },
              { 
                data: temp_min,
                borderColor: "#ffcc00",
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
  })

}
}
