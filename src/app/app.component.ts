import { Component } from '@angular/core';
import { AuthService } from './common/services/auth.service'

@Component({
  selector: 'app-main-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicaAngular';

  isLoggedIn:boolean = false

  constructor(private authService:AuthService) {
    this.authService.loginStatus.subscribe(status => {
      this.isLoggedIn = status
    })
  }

}
