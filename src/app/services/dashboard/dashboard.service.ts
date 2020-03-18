import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiURL } from "../../../environments/environment";
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { IDashboard } from 'src/app/models/dashboard/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  loadData() {
    return this.http.get<IDashboard>(`${apiURL}/dashboard/teste@gmail.com`, { observe: "response" })
  }

  dataFull(res, google){
    var data = google.visualization.arrayToDataTable([
      ['Status', 'Quantidade'],
      ['Entregue', res.entregues],
      ['Andamento', res.andamento],
      ['Não entregues', res.naoEntregues]
    ]);

    return data;
  }

  loadOptions() {
    var options = {
      title: 'Status das entregas',
      titleTextStyle: {
        color: 'white',
        fontSize: 16,
        bold: true,
      },
      backgroundColor: 'transparent',
      colors: ['#41FC2E', '#E9FF2E', '#FD2C13'],
      legend: { textStyle: { color: 'white', fontSize: 14, bold: true } },
      is3D: true
    };

    return options;
  }
}

