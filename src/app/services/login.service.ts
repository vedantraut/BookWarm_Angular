import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private Http: HttpClient) {}

  private url = constant.url;

  login(request: any) {
    return this.Http.post(this.url + 'users/login', request);
  }
}
