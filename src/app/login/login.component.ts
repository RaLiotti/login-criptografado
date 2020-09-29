import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges {

  constructor() { }

  @Input() usuario = '';
  @Input() senha = '';

  liberar = true;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('Testando o change');
  }



  logar(){

  }






  verificarUsuarioESenha(event: any){  
    /*console.log('Usuario' + this.usuario.length);
    console.log('Senha' + this.senha.length);

    if (this.usuario.length > 0 && this.senha.length > 0){
      this.liberar = false;
      console.log(this.senha);
      console.log(this.usuario);

    }else{
      this.liberar = true;
    }
    console.log(this.liberar);
  */
  }

}
