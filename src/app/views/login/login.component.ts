import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { apiURL } from "../../../environments/environment";
import { FormBuilder, FormGroup, Validators, FormGroupDirective, FormControl, NgForm } from '@angular/forms';
import { empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material/core';
import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';

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

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
    })
  }


  ngOnInit(): void {

  }

  login() {
    const email = this.emailFormControl.value;
    const password = this.passwordFormControl.value;

    if (email && password.length >= 8) {
      this.http.post(`${apiURL}/auth`, { username: email, password: password }, { observe: "response" })
        .pipe(catchError(err => {
          return empty();
        }))
        .subscribe(res => console.log(res));
    }
  }
}

export function background(bool){
  if(bool == true){
    document.getElementById("link").className = "lightLink";
    document.getElementById("borda").className = "bordaLight";
  } else {
    document.getElementById("link").className = "link";
    document.getElementById("borda").className = "borda";
  }
}