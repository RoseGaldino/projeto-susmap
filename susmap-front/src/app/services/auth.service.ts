import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  visualizarMenu() {
    if (this.router.url !== '/') {
      console.log(this.router.url);
      return true;
    }
    else {
      console.log(this.router.url);
      return false;
    }
  }
}
