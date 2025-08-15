import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { BookDTO } from '../../models/bookDTO';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(private bookservice: BookService) {}

  booksData: BookDTO[] = [];
  filteredBooksData: BookDTO[] = [];
  searchText: string = '';

  ngOnInit() {
    this.bookservice.getAllBooks().subscribe((data) => {
      console.log('all the books -- ', data);
      this.booksData = data as any[];
      this.filteredBooksData = [...this.booksData];
    });
  }

  get filteredBooks(): BookDTO[] {
    if (!this.searchText) {
      return this.booksData;
    }

    this.filteredBooksData = this.booksData.filter((book) =>
      book.title.toLowerCase().startsWith(this.searchText.toLowerCase())
    );

    return this.filteredBooksData;
  }
}
