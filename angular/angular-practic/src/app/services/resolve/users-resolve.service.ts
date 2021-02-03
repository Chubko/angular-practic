import {Injectable} from '@angular/core';
import {UserService} from '../user.service';
import {Resolve} from '@angular/router';
import {User} from '../../interfaces/users';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<User[]> {

  constructor(private userService: UserService) {
  }

  resolve(): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getUsers();
  }
}