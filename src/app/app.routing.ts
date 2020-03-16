import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { AuthGuardService } from './services/guards/auth.guard.service';
import { PanelComponent } from './views/panel/panel.component';
import { AutorizadoComponent } from './views/autorizado/autorizado.component';
import { PermissionGuardService } from './services/guards/permission.guard.service';
import { NaoAutorizadoComponent } from './views/nao-autorizado/nao-autorizado.component';


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
    path: 'welcome/:name',
    component: PanelComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'autorizado',
    component: AutorizadoComponent,
    canActivate: [PermissionGuardService]
  },
  {
    path: 'naoautorizado',
    component: NaoAutorizadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
