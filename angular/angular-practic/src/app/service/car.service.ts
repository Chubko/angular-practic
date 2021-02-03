import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../interfaces';
import {urls} from '../config';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(urls.apiCars);
  }

  create(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(urls.apiCars, car);
  }
}