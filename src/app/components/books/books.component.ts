import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { BookDTO } from '../../models/bookDTO';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(private bookservice: BookService) {}

  booksData: BookDTO[] = [];

  ngOnInit() {
    this.bookservice.getAllBooks().subscribe((data) => {
      console.log('all the books -- ', data);
      this.booksData = data as any[];
    });
  }
}
