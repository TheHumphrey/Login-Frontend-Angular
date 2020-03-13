import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoginService } from '../auth/auth-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private states: AuthLoginService, private router: Router) { }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{
    if(this.states.getOnLogin()){
      return true
    }
    this.router.navigate(['']);

    return false;
  }
}
