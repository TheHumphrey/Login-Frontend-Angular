import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { AuthGuardService } from './services/guards/auth.guard.service';
import { PanelComponent } from './views/panel/panel.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
