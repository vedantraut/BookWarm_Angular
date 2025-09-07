import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CheckoutService } from '../../services/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  imports: [],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css',
})
export class OrderSuccessComponent {
  constructor(
    private router: Router,
    private bookService: BookService,
    private checkoutservice: CheckoutService
  ) {}

  orderedBook: any;

  ngOnInit() {
    const bookId = history.state.bookId;
    console.log('Book ID in Order Success Component -- ', bookId);

    if (bookId) {
      this.bookService.getBookById(bookId).subscribe((data) => {
        console.log(
          'Book details with ID in Order Success Component -- ',
          data
        );

        this.orderedBook = data;
      });
    }
  }
}
