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

  //options chart
  single: any[];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private dash: DashboardService) {
    Object.assign(this, this.single)
   }

  ngOnInit(): void {
    this.loadDataDash();

    this.loadEntregasChart();
    this.loadSatisfacaoChart();
    this.loadPrazoChart();
  }

  loadEntregasChart() {
    
  }

  loadSatisfacaoChart() {
    
  }

  loadPrazoChart() {
    
  }

  loadDrawn() {

  }

  loadDataDash() {
    this.dash.loadData().subscribe(res => this.dataChart = res.body);
    this.dash.loadAllDashData().subscribe(res => this.dataAll = res.body);
  }
}

//   
