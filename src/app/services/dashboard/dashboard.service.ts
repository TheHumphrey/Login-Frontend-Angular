import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiURL } from "../../../environments/environment";
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { IDashboardChart } from 'src/app/models/dashboard/dashboardChart.model';
import { IDashboardData } from 'src/app/models/dashboard/dashboardDataAll.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }

  loadData() {
    return this.http.get<IDashboardChart>(`${apiURL}/dashboard`, { observe: "response" })
  }

  updateData(user: IDashboardChart){
    return this.http.put(`${apiURL}/dashboard/teste@gmail.com`,user).subscribe();
  }

  loadOptionsEntrega(obj) {
    var options = {
      title: 'Status das entregas',
      titleTextStyle: {
        color: 'black',
        fontSize: 16,
        bold: true,
      },
      backgroundColor: 'transparent',
      colors: ['#41FC2E', '#E9FF2E', '#FD2C13'],
      legend: { textStyle: { color: 'black', fontSize: 16, bold: true } },
      is3D: true,
      width: obj.width,
      height: obj.height
    };

    return options;
  }

  loadOptionsSatisfacao(obj) {
    var options = {
      title: 'Status das entregas',
      titleTextStyle: {
        color: 'black',
        fontSize: 14,
        bold: true,
      },
      backgroundColor: 'transparent',
      colors: ['#41FC2E', '#E9FF2E', '#FD2C13'],
      legend: { textStyle: { color: 'black', fontSize: 14, bold: true } },
      is3D: true,
      width: obj.width,
      height: obj.height
    };

    return options;
  }

  loadOptionsPrazo(obj) {
    var options = {
      title: 'Status das entregas',
      titleTextStyle: {
        color: 'black',
        fontSize: 16,
        bold: true,
      },
      backgroundColor: 'transparent',
      colors: ['#41FC2E', '#E9FF2E', '#FD2C13'],
      legend: { textStyle: { color: 'black', fontSize: 16, bold: true } },
      is3D: true,
      width: obj.width,
      height: obj.height
    };

    return options;
  }

  loadAllDashData(){
    return this.http.get<IDashboardData>(`${apiURL}/dashboard`, { observe: "response" })
  }
}

