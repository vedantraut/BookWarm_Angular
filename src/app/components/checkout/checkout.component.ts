import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookDTO } from '../../models/bookDTO';
import { CheckoutService } from '../../services/checkout.service';
import { OrderDTO } from '../../models/orderDTO';
import { CoffeeService } from '../../services/coffee.service';

@Component({
  selector: 'app-checkout',
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  constructor(
    private router: Router,
    private bookService: BookService,
    private checkoutservice: CheckoutService,
    private coffeeService: CoffeeService
  ) {}

  selectedBook: any;
  selectedCoffee: any;
  orderdto: OrderDTO = {} as OrderDTO;

  ngOnInit() {
    // const nav = this.router.getCurrentNavigation();
    // const bookId = nav?.extras.state?.['bookId'];
    const bookId = history.state.bookId;
    console.log('Book ID in Checkout Component -- ', bookId);

    const coffeeId = history.state.coffeeId || -1;
    console.log('Coffee ID in Checkout Component -- ', coffeeId);

    // Run Only if BookId is present
    if (bookId) {
      this.bookService.getBookById(bookId).subscribe((data) => {
        console.log('Book details in Checkout Component -- ', data);

        this.selectedBook = data;
      });
    }

    // Run Only if coffeeId is present
    if (coffeeId != -1) {
      this.coffeeService.getCoffeeById(coffeeId).subscribe((data) => {
        console.log('Coffee details in Checkout Component -- ', data);

        this.selectedCoffee = data;
      });
    }
  }

  checkout() {
    // Validation: Ensure at least a book is selected
    if (!this.selectedBook) {
      alert('Please select a book to proceed with checkout.');
      return;
    }

    // Prepare order data cleanly
    this.orderdto = {
      bookId: this.selectedBook.id,
      coffeeId: this.selectedCoffee ? this.selectedCoffee.coffeeId : -1,
    };

    console.log('Processing checkout:', this.orderdto);

    this.checkoutservice.checkout(this.orderdto).subscribe({
      next: (response) => {
        console.log('Checkout successful:', response);
        this.navigateToSuccess();
      },
      error: (error) => {
        console.error('Checkout failed:', error);
        alert('Checkout failed. Please try again.');
      },
    });
  }

  private navigateToSuccess() {
    const navigationState: any = {
      bookId: this.selectedBook.id,
    };

    // Only include coffeeId if coffee was selected
    if (this.selectedCoffee) {
      navigationState.coffeeId = this.selectedCoffee.coffeeId;
    }

    this.router.navigate(['/order-success'], { state: navigationState });
  }
}
