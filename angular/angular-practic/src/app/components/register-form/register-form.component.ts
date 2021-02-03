import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthentificationService} from '../../services/authentification.service';

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


  constructor(private authService: AuthentificationService) {
  }

  register(myForm: FormGroup): void {
    this.authService.register(myForm.getRawValue());
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
