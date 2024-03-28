import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarManufacturer } from './dashboard/model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

  getPopulation(): Observable<CarManufacturer[]> {
    return this.http.get<any>('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json').pipe(map(response  => {
      return response.data as CarManufacturer[];
    }))
  }
}