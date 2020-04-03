import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard/dashboard.service'
import { IDashboardChart } from 'src/app/models/dashboard/dashboardChart.model';
import { IDashboardData } from 'src/app/models/dashboard/dashboardDataAll.model';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataChart: IDashboardChart = {
    id: '5e847dbf9f38360e74e9ee0c',
    email: "",
    entregues: 0,
    andamento: 0,
    naoEntregues: 0,

    emDias: 0,
    emAtraso: 0,

    satisfeito: 0,
    neutro: 0,
    insatisfeito: 0
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
    frotaDisponivel: 0,
    frotaManutencao: 0,
    frotaIndisponivel: 0
  };

  prazoChartOptions = {
    single: [
      
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

  preenche(){
    this.prazoChartOptions.single = [{
      name: "Em Dias",
      value: this.dataChart.emDias
    },
    {
      name: "Em Atraso",
      value: this.dataChart.emAtraso
    }];

    this.entregasChartOptions.single = [{
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
    }];

    this.satisfacaoChartOption.single = [{
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
    }]
  }

  loadDataDash() {
    this.dash.loadData().subscribe(res => {
      this.dataChart = res.body
      this.preenche();
    });
    this.dash.loadAllDashData().subscribe(res => this.dataAll = res.body );

  }
}

//   
