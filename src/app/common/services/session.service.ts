import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpCliente:HttpClient) { }

  signup(data:any):Promise<any> {
    const url = `${environment.apiUrl}signup`
    return this.httpCliente.post(url, data).toPromise()
  }

  login(credentials:any):Promise<any> {
    const url = `${environment.apiUrl}users`
    return this.httpCliente.post(url, credentials).toPromise()
  }

  googleLogin(idToken:string):Promise<any> {
    console.log(environment.apiUrl, idToken)
    const url = `${environment.apiUrl}users/google`
    return this.httpCliente.post(url, {idToken:idToken}).toPromise()
  }

}
