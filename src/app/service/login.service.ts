import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'api/login';

  constructor(private http: HttpClient) { }


  login() {


    return ['Teste', 'teste2', 'teste3' ];
    //console.log('Teste de service');

    // return this.http.get<any[]>(`${this.loginUrl}`);

   // return this.http.get('http://localhost:8080/produtos').toPromise();


  }



}
