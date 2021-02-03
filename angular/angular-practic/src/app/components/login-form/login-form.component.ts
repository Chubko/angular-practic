import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  myForm: FormGroup;
  userName: FormControl;
  password: FormControl;
  errorMsg: string;
  user: string;

  constructor(private authService: AuthentificationService, private router: Router) {
  }

  logIn(myForm: FormGroup): void {
    const res = this.authService.logIn(myForm.getRawValue());

    if (res) {
      this.router.navigate(['main/users']);
      this.user = myForm.value.userName;
    } else {
      this.errorMsg = 'error';
    }
  }

  ngOnInit(): void {
    this.userName = new FormControl('');
    this.password = new FormControl('');
    this.myForm = new FormGroup({
      userName: this.userName,
      password: this.password
    });
  }

}
