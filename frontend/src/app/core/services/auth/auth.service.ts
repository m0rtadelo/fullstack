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

  public login(username = 'admin'): void {
    this.user = username;
  }

  public getUser(): string {
    return this.user;
  }
}
