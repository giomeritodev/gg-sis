import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class UsuarioGuard implements CanActivateChild{

    constructor(){}

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {

        /*
        //Permissão
        if(state.url.includes('delete')){
            alert('Usuário sem permissão');
            return false;
        }
        */

        return true;
    }
}