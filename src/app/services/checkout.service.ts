import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants/urls';
import { OrderDTO } from '../models/orderDTO';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient) {}

  private url = constant.url;

  checkout(orderdto: any) {
    return this.http.post<OrderDTO>(this.url + 'orders/checkout', orderdto);
  }
}
