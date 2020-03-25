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
    naoEntregues: 1,

    emDias: 1,
    emAtraso: 1,

    satisfeito: 1,
    neutro: 1,
    insatisfeito: 1
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
          data: [this.dataChart.satisfeito, this.dataChart.neutro, this.dataChart.naoEntregues],
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
        maintainAspectRatio: false,
        layout: {
          padding:{
            bottom: 15
          },
        }
      }
    });
  }

  loadPrazoChart() {
    var element = document.getElementById('prazoChart');
    var myChart = new Chart(element, {
      type: 'bar',
      data: {
        labels: ['Em Dias', 'Atraso'],
        datasets: [{
          data: [this.dataChart.emDias, this.dataChart.emAtraso],
          backgroundColor: [
            'rgba(41, 255, 73, .6)',
            'rgba(255, 41, 41, .6)',
          ],
          borderColor: [
            'rgba(41, 255, 73, 1)',
            'rgba(255, 41, 41, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        layout: {
          padding:{
            bottom: 3
          },
        },
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            stacked: true,
            gridLines: {
              display: false,
              color: "rgba(158, 158, 158, .6)"
            }
          }],
          xAxes: [{
            gridLines: {
              display: true
            }
          }]
        }
      }
    })
  }

  loadDrawn() {

  }

  loadDataDash() {
    this.dash.loadData().subscribe(res => this.dataChart = res.body);
    this.dash.loadAllDashData().subscribe(res => this.dataAll = res.body);
  }
}

//   
