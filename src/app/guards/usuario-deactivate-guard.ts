import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { HomeComponent } from "app/pages/home/home.component";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { IFormCanDeactivateGuard } from "./iform-candeactivate-gurad";

@Injectable()
export class UsuarioDeactivateGuard implements CanDeactivate<IFormCanDeactivateGuard>{

    canDeactivate(
        component: IFormCanDeactivateGuard,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | Promise<boolean> | boolean {
       //Implementa as permissões
        
       //se o formulario mudar não será permitido mudar de rota
       //return !component.formMudou;

       return component.podeDesativar();
    }

}