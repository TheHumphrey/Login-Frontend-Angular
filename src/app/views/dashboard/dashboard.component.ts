import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard/dashboard.service'
import { IDashboard } from 'src/app/models/dashboard/dashboard.model';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private data: IDashboard = { email: "", entregues: 1, andamento: 1, naoEntregues: 1 };

  constructor(private dash: DashboardService) { }

  ngOnInit(): void {
    if (typeof (google !== 'undefined')) {
      google.charts.load('current', { 'packages': ['corechart'] });
      this.dash.loadData().subscribe(res => this.data = res.body)
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.loadDrawn());
      }, 1000)
    }
  }

  loadDrawn() {
    this.entregasChart();
    this.PrazoChart()
    this.SatisfacaoChart()
  }

  entregasChart() {
    var dataGoogle = google.visualization.arrayToDataTable([
      ['Status', 'Quantidade'],
      ['Entregue', this.data.entregues],
      ['Andamento', this.data.andamento],
      ['Não entregues', this.data.naoEntregues]
    ])
    var chart = new google.visualization.PieChart(document.getElementById('chartEntregas'));
    chart.draw(dataGoogle, this.dash.loadOptionsEntrega());
  }

  SatisfacaoChart() {
    var dataGoogle = google.visualization.arrayToDataTable([
      ['Status', 'Quantidade'],
      ['Entregue', this.data.entregues],
      ['Andamento', this.data.andamento],
      ['Não entregues', this.data.naoEntregues]
    ])
    var chart = new google.visualization.PieChart(document.getElementById('chartSatisfacao'));
    chart.draw(dataGoogle, this.dash.loadOptionsSatisfacao());
  }

  PrazoChart() {
    var dataGoogle = google.visualization.arrayToDataTable([
      ['Status', 'Quantidade'],
      ['Entregue', this.data.entregues],
      ['Andamento', this.data.andamento],
      ['Não entregues', this.data.naoEntregues]
    ])
    var chart = new google.visualization.PieChart(document.getElementById('chartPrazo'));
    chart.draw(dataGoogle, this.dash.loadOptionsPrazo());
  }
}
