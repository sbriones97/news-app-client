import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus:BehaviorSubject<boolean> = new BehaviorSubject(false)

  constructor() { 
    this.loginStatus.next(this.isLoggedIn())
  }

  saveToken(valor:string) {
    localStorage.setItem('token', valor)
    this.loginStatus.next(true)
  }

  isLoggedIn() {
    return !!this.getToken() || false
  }

  getToken() {
    return localStorage.getItem('token') || false
  }

  logout() {
    localStorage.clear()
    this.loginStatus.next(false)
    
  }

}
