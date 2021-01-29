import {Component, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  form: FormGroup;
  name: any;
  age: any;
  email: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
    ) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as User;
      this.initForm();
    });
  }

  // ngOnInit(): void {
  //   this.name = new FormControl(this.user.name, [Validators.required]);
  //   this.age = new FormControl(this.user.age, [Validators.required, Validators.min(0), Validators.max(100)]);
  //   this.email = new FormControl(this.user.email, [Validators.required, Validators.email]);
  //   this.form = new FormGroup({
  //     name: this.name,
  //     age: this.age,
  //     email: this.email
  //   });
  //   console.log("ngOnInit");
  // }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.form = this.formBuilder.group(this.user);
  }


  // submitChanges(form: NgForm): void {
  //   console.log(form);
  // }

  submitChanges(form: FormGroup): void {
    console.log(form);
  }
}
