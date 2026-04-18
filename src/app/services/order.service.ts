import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private Http: HttpClient) {}

  private url = constant.url;

  getOrderById(id: any) {
    return this.Http.get(this.url + 'orders/user/' + id);
  }
  
}
