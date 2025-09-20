import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants/urls';
import { RegisterationRequest } from '../models/registeration-request';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private Http: HttpClient) {}

  private url = constant.url;

  register(registerRequest: any) {
    return this.Http.post<String>(this.url + 'users/register', registerRequest);
  }
}
