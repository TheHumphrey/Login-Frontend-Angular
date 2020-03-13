import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth/auth-login.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  username: string;
  constructor(private router: ActivatedRoute) {
    this.username = this.router.snapshot.params['name'];
   }
  ngOnInit(): void {
  }

}
