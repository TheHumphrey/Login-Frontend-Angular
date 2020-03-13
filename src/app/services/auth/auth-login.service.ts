import { Injectable } from '@angular/core';

import { apiURL } from "../../../environments/environment";
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  private online = false;

  constructor(private http: HttpClient, private router: Router) { }

  authLogin(email, password) {
    if (email && password.length >= 8) {
      this.http.post(`${apiURL}/auth`, { username: email, password: password }, { observe: "response" })
        .pipe(catchError(err => {
          return empty();
        }))
        .subscribe(res => {
          this.onLogin();
          this.router.navigate(['welcome', email])
        });
    }
  }

  onLogin(){
    this.online = true;
  }

  getOnLogin(){
    return this.online;
  }
}
