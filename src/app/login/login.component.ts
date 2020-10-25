import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

import { LoginService } from './../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges{




  usuario: string;
  senha: string;

  liberar = true;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('Testando o change');
  }

  constructor(private loginService: LoginService) { }


  logar(){

    console.log(this.loginService.login());


    //this.loginService.login().subscribe(dados => this.produtos = dados);
  }


}
