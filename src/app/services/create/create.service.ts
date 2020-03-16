import { Injectable } from '@angular/core';
import { ICadastro } from 'src/app/models/cadastro/cadastro.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

import { apiURL } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class CreateAccount {
  constructor(private http: HttpClient, private router: Router) { }

  create(email, name, data, password, adm) {
    if (name && data) {
      this.http.post(`${apiURL}/usuario`, { email: email, nome: name, dataNascimento: data, senha: password, adm: adm }, { observe: "response" })
        .pipe(catchError(err => {
          return empty();
        }))
        .subscribe(res => {
          alert("Cadastrado com sucesso!");
          this.router.navigate(['']);
        })
    }
  }
}