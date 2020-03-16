import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ErrorStateMatcher } from '@angular/material/core';
import { CreateAccount } from 'src/app/services/create/create.service';
import { ICadastro } from 'src/app/models/cadastro/cadastro.model';

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

  public newUser: ICadastro = { email: '', name: '', data: '', password: '', adm: false };
  public form: FormGroup;

  matcher = new MyErrorStateMatcher();

  

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

  constructor(private http: HttpClient, private fb: FormBuilder, private cadastro: CreateAccount) {
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
    if (!this.emailFormControl.hasError('email') && this.newUser.password.length >= 8) {
      this.cadastro.create(this.newUser.email, this.newUser.name, this.newUser.data, this.newUser.password, this.newUser.adm);
    }
  }
}