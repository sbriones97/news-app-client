import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {AuthService} from 'src/app/common/services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn:boolean = false
  
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.authService.loginStatus.subscribe(flag => {
      this.loggedIn = flag
    })
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
}
