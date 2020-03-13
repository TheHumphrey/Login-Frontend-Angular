import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormGroupDirective, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginModel } from 'src/app/models/login/login-model';
import { AuthLoginService } from 'src/app/services/auth/auth-login.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  public usuario: LoginModel = {username: '', password: ''};
  public form: FormGroup;

  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(40)
  ])

  constructor(private fb: FormBuilder, private auth: AuthLoginService) {
    this.form = this.fb.group({
    })
  }


  ngOnInit(): void { }

  login() {
    this.auth.authLogin(this.usuario.username, this.usuario.password);
  }

  getUser(){
    return this.usuario.username;
  }
}

export function background(bool) {
  if (bool == true) {
    document.getElementById("link").className = "lightLink";
    document.getElementById("borda").className = "bordaLight";
  } else {
    document.getElementById("link").className = "link";
    document.getElementById("borda").className = "borda";
  }
}