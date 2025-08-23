import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constants/urls';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private Http: HttpClient) {}

  private url = constant.url;

  getBookById(id: any) {
    return this.Http.get(this.url + 'books/getBook', {
      params: { id },
    });
  }
  getAllBooks() {
    return this.Http.get(this.url + 'books/getAllBooks');
  }
}
