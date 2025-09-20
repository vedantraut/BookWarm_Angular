import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CheckoutService } from '../../services/checkout.service';
import { Router, RouterLink } from '@angular/router';
import { CoffeeService } from '../../services/coffee.service';
import { BookDTO } from '../../models/bookDTO';

@Component({
  selector: 'app-order-success',
  imports: [RouterLink],
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

  orderedBook: {
    bookId: number;
    title: string;
    isbn: string;
    price: number;
    imageUrl: string;
    authorName: string;
  } = {
    bookId: 0,
    title: '',
    isbn: '',
    price: 0,
    imageUrl: '',
    authorName: '',
  };
  orderedCoffee: {
    coffeeId: number;
    name: string;
    coffeeType: string;
    description: string;
    price: number;
    imageUrl: string;
  } = {
    coffeeId: 0,
    name: '',
    coffeeType: '',
    description: '',
    price: 0,
    imageUrl: '',
  };

  ngOnInit() {
    const bookId = history.state.bookId;
    console.log('Book ID in Order Success Component -- ', bookId);

    const coffeeId = history.state.coffeeId || -1;
    console.log('Coffee ID in Order Success Component -- ', coffeeId);

    // if (bookId && coffeeId) {
    //   this.bookService.getBookById(bookId).subscribe((data: any) => {
    //     console.log(
    //       'Book details with ID in Order Success Component -- ',
    //       data
    //     );

    //     this.orderedBook = data;
    //   });

    //   this.coffeeService.getCoffeeById(coffeeId).subscribe((data: any) => {
    //     console.log('Coffee details in Checkout Component -- ', data);

    //     this.orderedCoffee = data;
    //   });
    // }
    // Run Only if BookId is present
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe((data: any) => {
        console.log('Book details in Order Success Component -- ', data);

        this.orderedBook = data;
      });
    }

    // Run Only if coffeeId is present
    if (coffeeId != -1) {
      this.coffeeService.getCoffeeById(coffeeId).subscribe((data: any) => {
        console.log('Coffee details in Order Success Component -- ', data);

        this.orderedCoffee = data;
      });
    }
  }
}
