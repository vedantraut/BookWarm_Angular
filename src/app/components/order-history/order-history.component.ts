import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-history',
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistory implements OnInit {
  orders: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(private orderService: OrderService, private location: Location) {}

  ngOnInit() {
    const userIdString = localStorage.getItem('userId');

    if (!userIdString) {
      this.loading = false;
      this.errorMessage = 'No user session found. Please log in to view your orders.';
      return;
    }

    const userId = Number(userIdString);
    this.orderService.getOrderById(userId).subscribe({
      next: (result: any) => {
        this.orders = Array.isArray(result) ? result : result?.orders ?? [];
        this.loading = false;

        console.log("Orders for user - ", userId," ", this.orders);
        
      },
      error: (error: any) => {
        console.error('Order history error:', error);
        this.errorMessage = 'Unable to load order history at the moment. Please try again later.';
        this.loading = false;
      }
    });
  }

  getBookLabel(order: any) {
    return order?.bookTitle ?? order?.bookName ?? order?.book?.title ?? 'Book details unavailable';
  }

  goBack() {
    this.location.back();
  }

  getCoffeeLabel(order: any) {
    let coffeeLabel = order?.coffee ?? order?.coffee?.title ?? order?.coffee?.name ?? 'No coffee selected';
    
    if(coffeeLabel === '-1'){
      coffeeLabel = 'No coffee selected';
    }
    
    return coffeeLabel;
  }
}

