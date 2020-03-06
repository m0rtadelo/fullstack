import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = undefined;

  constructor() { }

  public isLogged(): boolean {
    return !!this.user;
  }
}
