import {Component, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(() => this.user = this.router.getCurrentNavigation().extras.state as User
    );
  }

  ngOnInit(): void {
  }

}
