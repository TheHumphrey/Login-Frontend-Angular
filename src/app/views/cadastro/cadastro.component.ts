import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { apiURL } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  matcher = new MyErrorStateMatcher();

  public form: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  dataFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(40)
  ])

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.requiredTrue],
      nome: ['', Validators.requiredTrue],
      data: ['', Validators.requiredTrue],
      password: ['', Validators.requiredTrue]
    })
  }

  ngOnInit(): void {
  }

  cadastrar() {
    const email = this.emailFormControl.value;
    const nome = this.nameFormControl.value;
    const data = this.dataFormControl.value;
    const password = this.passwordFormControl.value;

    if (!this.emailFormControl.hasError('email') && nome && data && password.length >= 8) {
      this.http.post(`${apiURL}/usuario`, { email: email, nome: nome, dataNascimento: data, senha: password }, { observe: "response" })
        .pipe(catchError(err => {
          return empty();
        }))
        .subscribe(res => console.log(res))
    }
  }
}