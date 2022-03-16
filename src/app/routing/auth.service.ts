import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RouteSectionAuthService {
  isLoggedIn: boolean = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((_resolve, _reject) => {
      setTimeout(() => {
        _resolve(this.isLoggedIn);
      }, 800);
    });
  }
}
