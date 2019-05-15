import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from 'app/pages/login/usuario';
import { Router } from '@angular/router';



@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

  //Permite mostrar uma rota
  mostrarMenuEmitter = new EventEmitter<boolean>();


  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario){
    
    if(usuario.nome === 'giomerito.dev@gmail.com' && usuario.senha === '123456'){   
        
      this.usuarioAutenticado = true; 

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/']);

    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
