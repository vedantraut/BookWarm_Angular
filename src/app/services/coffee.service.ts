import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private Http: HttpClient) {}

  private url = constant.url;

  getCoffees() {
    return this.Http.get(this.url + 'coffee/getAllCoffees');
  }
}
