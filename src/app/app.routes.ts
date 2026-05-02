import { Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { RegisterComponent } from './components/register/register.component';
import { OrderHistory } from './components/order-history/order-history.component';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'order-history', component: OrderHistory }
];
