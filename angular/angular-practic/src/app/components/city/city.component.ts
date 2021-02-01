import {Component, Input, OnInit} from '@angular/core';
import {cities} from '../../data/cities';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  @Input()
  city: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
