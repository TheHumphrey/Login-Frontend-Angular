import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard/dashboard.service'
import { IDashboardChart } from 'src/app/models/dashboard/dashboardChart.model';
import { IDashboardData } from 'src/app/models/dashboard/dashboardDataAll.model';
import { Chart } from 'chart.js';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dataChart: IDashboardChart = {
    email: "",
    entregues: 1,
    andamento: 1,
    naoEntregues: 1
  };
  dataAll: IDashboardData = {
    lucroBruto: 0,
    lucroDesconto: 0,
    tempoEntrega: 0,
    tempoRota: 0,
    tempoSemanal: 0,
    kmDiario: 0,
    kmSemanal: 0,
    kmMensal: 0,
    custoDiario: 0,
    custoSemanal: 0,
    custoMensal: 0,
    disponivelFrota: 0,
    manutencaoFrota: 0,
    indisponivelFrota: 0
  };

  constructor(private dash: DashboardService) { }

  ngOnInit(): void {
    this.loadDataDash();

    this.loadEntregasChart();
    this.loadSatisfacaoChart();
    this.loadPrazoChart()

  }

  loadEntregasChart() {
    var element = document.getElementById('entregasChart');
    var myChart = new Chart(element, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.dataChart.entregues, this.dataChart.andamento, this.dataChart.naoEntregues],
          backgroundColor: ["rgba(5, 255, 43, .6)", "rgba(255, 244, 36, .6)", "rgba(255, 5, 5, .6)"],
          borderColor: ["rgba(5, 255, 43)", "rgba(255, 244, 36)", "rgba(255, 5, 5)"],
          hoverBorderColor: '#fff'
        }],
        labels: [
          'Entregues',
          'Andamento',
          'Não entregues'
        ]
      },
      options: {
        maintainAspectRatio: false,
      }
    });
  }

  loadSatisfacaoChart() {
    var element = document.getElementById('satisfacaoChart');
    var myChart = new Chart(element, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.dataChart.entregues, this.dataChart.andamento, this.dataChart.naoEntregues],
          backgroundColor: ["rgba(5, 255, 43, .6)", "rgba(255, 244, 36, .6)", "rgba(255, 5, 5, .6)"],
          borderColor: ["rgba(5, 255, 43)", "rgba(255, 244, 36)", "rgba(255, 5, 5)"],
          hoverBorderColor: '#fff'
        }],
        labels: [
          'Satisfeito',
          'Neutro',
          'Insatisfeito'
        ]
      },
      options: {
        maintainAspectRatio: true,
        
      }
    });
  }

  loadPrazoChart() {
    var element = document.getElementById('prazoChart');
    var myChart = new Chart(element, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        title: {
          display: false,
          text: 'Teste'
        },
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: true,
              color: "rgba(158, 158, 158, .6)"
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    })
  }

  loadDrawn() {

  }

  loadDataDash() {
    this.dash.loadAllDashData().subscribe(res => this.dataAll = res.body);
  }
}

//   
