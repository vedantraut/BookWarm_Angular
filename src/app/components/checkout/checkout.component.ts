import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookDTO } from '../../models/bookDTO';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  constructor(private router: Router, private bookService: BookService) {}
  selectedBook: any;
  ngOnInit() {
    // const nav = this.router.getCurrentNavigation();
    // const bookId = nav?.extras.state?.['bookId'];
    const bookId = history.state.bookId;
    console.log('Book ID in Checkout Component -- ', bookId);

    if (bookId) {
      this.bookService.getBookById(bookId).subscribe((data) => {
        console.log('Book details in Checkout Component -- ', data);

        this.selectedBook = data;
      });
    }
  }
}
