import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CarService} from '../../../service/car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  form: FormGroup;
  error: any;

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      brand: new FormControl(''),
      model: new FormControl(''),
      year: new FormControl('')
    });
  }

  save(form: FormGroup): void {
    this.carService.create(form.getRawValue()).subscribe(value => {
      console.log(value);
      this.router.navigate(['cars']);
    }, error => this.error = error.error);
  }
}
