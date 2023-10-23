import { CanActivateFn } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    // Vérifiez ici si l'utilisateur est authentifié ou remplit d'autres critères.
    // Par exemple, vous pouvez utiliser un service d'authentification pour vérifier l'état de l'utilisateur.

    if(LoginComponent.islogin=='true') {

      return true; // L'utilisateur est authentifié, permet d'accéder à la route.
    } else {
      // Redirigez l'utilisateur vers une autre route ou montrez un message d'erreur.
      return this.router.parseUrl('/login'); // Remplacez '/login' par la route de connexion souhaitée.
    }
  }
}

