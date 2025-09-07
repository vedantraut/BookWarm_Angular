import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { BookDTO } from '../../models/bookDTO';
import { CheckoutService } from '../../services/checkout.service';
import { OrderDTO } from '../../models/orderDTO';

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
    private checkoutservice: CheckoutService
  ) {}

  selectedBook: any;
  orderdto: OrderDTO = {} as OrderDTO;

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

  checkout() {
    console.log('this.selectedBook.id -- ', this.selectedBook.id);
    this.orderdto.bookId = this.selectedBook.id;
    this.orderdto.coffeeId = 1; // Assuming a default coffee ID for demonstration

    console.log('Order DTO -- ', this.orderdto);

    this.checkoutservice.checkout(this.orderdto).subscribe((data) => {
      console.log('Checkout response -- ', data);
      alert('Checkout successful!');
      // this.router.navigate(['/books']);
    });
  }
}
