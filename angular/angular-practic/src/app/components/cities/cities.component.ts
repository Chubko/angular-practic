import {Component, OnInit} from '@angular/core';
import {cities} from '../../data/cities';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities = cities;

  constructor() {
  }

  ngOnInit(): void {
  }

}
