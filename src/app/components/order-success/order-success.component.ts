import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CheckoutService } from '../../services/checkout.service';
import { Router } from '@angular/router';
import { CoffeeService } from '../../services/coffee.service';

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
    private checkoutservice: CheckoutService,
    private coffeeService: CoffeeService
  ) {}

  orderedBook: any;
  orderedCoffee: any;

  ngOnInit() {
    const bookId = history.state.bookId;
    console.log('Book ID in Order Success Component -- ', bookId);

    const coffeeId = history.state.bookId;
    console.log('Coffee ID in Order Success Component -- ', bookId);

    if (bookId && coffeeId) {
      this.bookService.getBookById(bookId).subscribe((data) => {
        console.log(
          'Book details with ID in Order Success Component -- ',
          data
        );

        this.orderedBook = data;
      });

      this.coffeeService.getCoffeeById(coffeeId).subscribe((data) => {
        console.log('Coffee details in Checkout Component -- ', data);

        this.orderedCoffee = data;
      });
    }
  }
}
