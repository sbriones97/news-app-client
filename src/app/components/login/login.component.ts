import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/common/services/auth.service'

import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login'
import { SessionService } from 'src/app/common/services/session.service';

interface Credential {
  password
  username
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  credentials: Credential = {
    username: "test",
    password: "12345"
  }

  error = false

  constructor(
    private authService:AuthService, 
    private router:Router, 
    private socialAuthService:SocialAuthService, 
    private sessionService:SessionService) { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required]
    // })

    this.socialAuthService.authState.subscribe((user) => {
      if(user) {
        console.log('Se inicio sesion: ', user)
        this.sessionService.googleLogin(user.idToken).then(response => {
          this.authService.saveToken(response)
          //this.loginError = false
          this.router.navigate(['/recientes'])
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        console.log('No hay sesion')
      }
    })
  }

  hacerLogin() {
    this.authService.saveToken('123456')
    console.log('Hiciste click en login', this.credentials)
    setTimeout(() => {
      this.router.navigate(['/users'])
    }, 3000);
  }

  detectPress(e) {
    if(e.key === "Enter") {
      this.hacerLogin()
    }
    e.preventDefault()
    e.stopPropagation()
  }

  login() {
    this.authService.saveToken('123456')
    this.router.navigate(['/users'])
  }

  googleLogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }
}
