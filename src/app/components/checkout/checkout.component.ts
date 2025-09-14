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

    const coffeeId = history.state.coffeeId;
    console.log('Coffee ID in Checkout Component -- ', coffeeId);

    if (bookId && coffeeId) {
      this.bookService.getBookById(bookId).subscribe((data) => {
        console.log('Book details in Checkout Component -- ', data);

        this.selectedBook = data;
      });

      this.coffeeService.getCoffeeById(coffeeId).subscribe((data) => {
        console.log('Coffee details in Checkout Component -- ', data);

        this.selectedCoffee = data;
      });
    }
  }

  checkout() {
    console.log('this.selectedBook.id -- ', this.selectedBook.id);
    this.orderdto.bookId = this.selectedBook.id;
    this.orderdto.coffeeId = this.selectedCoffee.coffeeId; // Assuming a default coffee ID for demonstration

    console.log('Order DTO -- ', this.orderdto);

    this.checkoutservice.checkout(this.orderdto).subscribe((data) => {
      console.log('Checkout response -- ', data);
      alert('Checkout successful!');
      this.router.navigate(['/order-success'], {
        state: {
          bookId: this.selectedBook.id,
          coffeeId: this.selectedCoffee.coffeeId,
        },
      });
    });
  }
}
