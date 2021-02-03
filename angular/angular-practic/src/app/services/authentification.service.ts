import {Injectable} from '@angular/core';
import {Authentification} from '../interfaces/authentification';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users: Authentification[];

  constructor() {
    this.users = [{userName: 'max', password: '12345'}, {userName: 'kokos', password: '67890'}];
  }

  logIn(user: Authentification): boolean {
    return !!this.users.filter(value => JSON.stringify(value) === JSON.stringify(user)).length;
  }
  register(user: Authentification): void{
    this.users.push(user);
  }
}
