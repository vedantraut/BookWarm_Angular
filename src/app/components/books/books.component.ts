import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  constructor(private bookservice: BookService) {}

  ngOnInit() {
    this.bookservice.getAllBooks().subscribe((data) => {
      console.log('all the books -- ', data);
    });
  }
}
