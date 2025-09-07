import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { NgModule } from '@angular/core';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
