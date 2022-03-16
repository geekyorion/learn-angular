import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { RouteSectionAuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class RouteAuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: RouteSectionAuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated().then((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        this.router.navigate(['/']);
      }
      return isAuthenticated;
    });
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(route, state);
  }
}
