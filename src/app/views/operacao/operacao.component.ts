import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { IDashboard } from 'src/app/models/dashboard/dashboard.model';

@Component({
  selector: 'app-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  public form: FormGroup;
  public data: IDashboard = { email: "", entregues: 1, andamento: 1, naoEntregues: 1 };

  constructor(private fb: FormBuilder, private dash: DashboardService) {
    this.form = this.fb.group([]);
  }

  ngOnInit(): void {
    this.load();
  }

  entregue() {
    if (this.data.andamento >= 0) {
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

}
