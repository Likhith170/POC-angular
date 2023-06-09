import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private readonly validUsername = 'admin';
  private readonly validPassword = 'password';

  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
