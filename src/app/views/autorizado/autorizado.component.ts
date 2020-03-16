import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorizado',
  templateUrl: './autorizado.component.html',
  styleUrls: ['./autorizado.component.css']
})
export class AutorizadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['']);
  }
}
