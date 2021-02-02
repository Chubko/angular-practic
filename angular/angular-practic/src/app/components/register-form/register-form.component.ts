import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthentificationService} from '../../services/authentification.service';
import {Router} from '@angular/router';
import {Authentification} from '../../interfaces/authentification';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  myForm: FormGroup;
  userName: FormControl;
  password: FormControl;
  errorMsg: string;


  constructor(private authService: AuthentificationService, private router: Router) {
  }

  register(myForm: FormGroup): void {
    const res = this.authService.register(myForm.value);
    console.log(myForm.value);
    console.log(res);
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
