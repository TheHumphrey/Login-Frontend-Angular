import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiURL } from "../../../environments/environment";
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
    return this.http.put(`${apiURL}/dashboard/teste@gmail.com`,user)
  }

  loadAllDashData(){
    return this.http.get<IDashboardData>(`${apiURL}/dashboarddata`, { observe: "response" })
  }
  
}

