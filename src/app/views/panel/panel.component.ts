import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth/auth.login.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  username: string;
  constructor(private params: ActivatedRoute, private router: Router) {
    this.username = this.params.snapshot.params['name'];
   }

  ngOnInit(): void {
  }

  nextPage(){
    this.router.navigate(['autorizado'])
  }

}
