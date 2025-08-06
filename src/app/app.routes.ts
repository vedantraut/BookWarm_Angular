import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [{ path: '', component: BooksComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
