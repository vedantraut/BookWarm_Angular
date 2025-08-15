import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { NgModule } from '@angular/core';
import { CoffeeComponent } from './components/coffee/coffee.component';

export const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'coffee', component: CoffeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
