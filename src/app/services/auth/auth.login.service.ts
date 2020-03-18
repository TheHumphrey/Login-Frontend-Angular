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
  private permission = false;
  private user = '';

  constructor(private http: HttpClient, private router: Router) { }

  authLogin(email, password) {
    if (email && password.length >= 8) {
      this.http.post(`${apiURL}/auth`, { username: email, password: password }, { observe: "response" })
        .pipe(catchError(err => {
          return empty();
        }))
        .subscribe(res => {
          this.onLogin(res.body);
          this.user = email;
          this.router.navigate(['home', email])
        });
    }
  }

  onLogin(params){
    this.online = true;
    this.permission = params;
  }

  getOnLogin(){
    return this.online;
  }

  getOnPermission(){
    return this.permission;
  }

  getUser(){
    return this.user;
  }
}
