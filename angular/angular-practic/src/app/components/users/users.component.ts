import {Component, OnInit} from '@angular/core';
import {usersWithAddress} from '../../data/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = usersWithAddress;

  constructor() {
  }

  ngOnInit(): void {
  }

}
