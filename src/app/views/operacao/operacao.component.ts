import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { IDashboardChart } from 'src/app/models/dashboard/dashboardChart.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  public form: FormGroup;
  public data: IDashboardChart = {
    id: '5e847dbf9f38360e74e9ee0c',
    email: 'teste@gmail.com',
    entregues: 0,
    andamento: 0,
    naoEntregues: 0,
     
    emDias: 0,
    emAtraso: 0,

    satisfeito: 0,
    neutro: 0,
    insatisfeito: 0
    };

  constructor(private fb: FormBuilder, private dash: DashboardService, private router: Router) {
    this.form = this.fb.group([]);
  }

  ngOnInit(): void {
    this.load();
  }

  entregue() {
    if (this.data.andamento > 0) {
      this.data.entregues++
      this.data.andamento--
      this.dash.updateData(this.data)
    }
  }

  naoEntregue() {
    if (this.data.andamento > 0) {
      this.data.naoEntregues++
      this.data.andamento--
      this.dash.updateData(this.data);
    }
  }

  load() {
    this.dash.loadData().subscribe(res => this.data = res.body);
  }

  nextPage() {
    this.router.navigate(['dashboard'])
  }

}
