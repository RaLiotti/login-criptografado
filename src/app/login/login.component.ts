import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

import { LoginService } from './../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges{




  @Input() usuario = '';
  @Input() senha = '';

  liberar = true;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('Testando o change');
  }



  verificarUsuarioESenha(event: any){
    console.log('Usuario' + this.usuario.length);
    console.log('Senha' + this.senha.length);

    if (this.usuario.length > 0 && this.senha.length > 0){
      this.liberar = false;
      console.log(this.senha);
      console.log(this.usuario);

    }else{
      this.liberar = true;
    }
    console.log(this.liberar);

  }

  constructor(private loginService: LoginService) { }


  logar(){

    console.log(this.loginService.login());


    //this.loginService.login().subscribe(dados => this.produtos = dados);
  }


}
