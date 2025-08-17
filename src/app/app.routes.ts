import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { NgModule } from '@angular/core';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'coffee', component: CoffeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
