import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoginService } from '../auth/auth.login.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuardService implements CanActivate {

  constructor(private state: AuthLoginService, private router: Router) { }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    : Observable<boolean> | boolean {
    if (this.state.getOnPermission()) {
      return true;
    }
    this.router.navigate(['naoautorizado']);

    return false;
  }
}
