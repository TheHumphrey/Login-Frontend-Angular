import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { AuthGuardService } from './services/guards/auth.guard.service';
import { PanelComponent } from './views/panel/panel.component';
import { PermissionGuardService } from './services/guards/permission.guard.service';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { OperacaoComponent } from './views/operacao/operacao.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'home/:name',
    component: PanelComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'operacao',
    component: OperacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
