import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard/dashboard.service'
import { IDashboardChart } from 'src/app/models/dashboard/dashboardChart.model';
import { IDashboardData } from 'src/app/models/dashboard/dashboardDataAll.model';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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

    emDias: 0,
    emAtraso: 0,

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

  prazoChartOptions = {
    single: [
      {
        name: "Em Dias",
        value: this.dataChart.emDias
      },
      {
        name: "Em Atraso",
        value: this.dataChart.emAtraso
      }
    ],
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    showLegend: true,
    showXAxisLabel: true,
    xAxisLabel: '',
    showYAxisLabel: false,
    yAxisLabel: '',

    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    }

  };

  entregasChartOptions = {
    single: [
      {
        name: "Entregues",
        value: this.dataChart.entregues
      },
      {
        name: "Andamento",
        value: this.dataChart.andamento
      },
      {
        name: "Não Entregues",
        value: this.dataChart.naoEntregues
      }
    ],

    gradient: true,
    showLegend: false,
    showLabels: true,
    isDoughnut: false,
    legendPosition: 'below',

    colorScheme: {
      domain: ['rgba(0, 255, 0)', 'rgba(255, 0, 0)', 'rgba(255, 255, 0)']
    }
  };

  satisfacaoChartOption = {
    single:[
      {
        name: "Satisfeito",
        value: this.dataChart.satisfeito
      },
      {
        name: "Neutro",
        value: this.dataChart.neutro
      },
      {
        name: "Insatisfeito",
        value: this.dataChart.insatisfeito
      }
    ],
  colorScheme: {
    domain: ['rgb(102, 255, 51)', 'rgb(255, 255, 0)', 'rgb(255, 51, 0)']
  }
  }

  


  constructor(private dash: DashboardService) {
  };

  ngOnInit(): void {
    this.loadDataDash();
  };

  loadDataDash() {
    this.dash.loadData().subscribe(res => this.dataChart = res.body);
    this.dash.loadAllDashData().subscribe(res => this.dataAll = res.body);
  }
}

//   
