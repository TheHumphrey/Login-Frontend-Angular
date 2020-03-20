import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/dashboard/dashboard.service'
import { IDashboard } from 'src/app/models/dashboard/dashboard.model';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private data: IDashboard = { email: "", entregues: 1, andamento: 1, naoEntregues: 1 };

  constructor(private dash: DashboardService, private router: Router) { }

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
    var dataGoogle = google.visualization.arrayToDataTable([
      ['Status', 'Quantidade'],
      ['Entregue', this.data.entregues],
      ['Andamento', this.data.andamento],
      ['Não entregues', this.data.naoEntregues]
    ])
    var chart = new google.visualization.PieChart(document.getElementById('chartEntregas'));
    chart.draw(dataGoogle, this.dash.loadOptions());
  }

  nextPage() {
    // this.router.navigate(['operacao']);
  }
}
