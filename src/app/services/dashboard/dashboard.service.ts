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
    return this.http.get<IDashboard>(`${apiURL}/dashboard`, { observe: "response" })
  }

  updateData(user: IDashboard){
    return this.http.put(`${apiURL}/dashboard/teste@gmail.com`,user).subscribe();
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
      is3D: true,
      width: 440
    };

    return options;
  }
}

