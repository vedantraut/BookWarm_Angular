import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { BookDTO } from '../../models/bookDTO';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, NavBarComponent],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  constructor(private bookservice: BookService) {}

  booksData: BookDTO[] = [];
  // filteredBooksData: BookDTO[] = [];
  searchText: string = '';
  searchBy: string = 'title';
  toggleFilterDropdown: boolean = false;

  @ViewChild('filterDropdown') filterDropdown!: ElementRef | undefined;
  @ViewChild('filterIcon') filterIcon!: ElementRef | undefined;

  ngOnInit() {
    this.bookservice.getAllBooks().subscribe((data) => {
      console.log('all the books -- ', data);
      this.booksData = data as any[];
      // this.filteredBooksData = [...this.booksData];
    });
  }

  get filteredBooks(): BookDTO[] {
    if (!this.searchText.trim()) {
      return this.booksData;
    }

    const searchText = this.searchText.trim().toLowerCase();
    // return this.booksData.filter((book) =>
    //   book.title.toLowerCase().startsWith(this.searchText.toLowerCase())
    // );

    console.log('Search Text -- ' + this.searchText);
    console.log('Search By -- ' + this.searchBy);

    switch (this.searchBy) {
      case 'title':
        return this.booksData.filter((book) =>
          book.title.toLowerCase().startsWith(searchText)
        );
      case 'author':
        return this.booksData.filter((book) =>
          book.authorName.toLowerCase().startsWith(searchText)
        );
      case 'price':
        return this.booksData.filter((book) =>
          book.price.toString().startsWith(searchText)
        );
      default:
        return this.booksData; // Default case if no valid searchBy is provided
    }

    // return this.filteredBooksData;
  }

  toggleFilter() {
    this.toggleFilterDropdown = !this.toggleFilterDropdown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.toggleFilterDropdown) return;

    const dropdown = this.filterDropdown?.nativeElement;
    const icon = this.filterIcon?.nativeElement;

    if (
      dropdown &&
      !dropdown.contains(event.target) &&
      icon &&
      !icon.contains(event.target)
    ) {
      this.toggleFilterDropdown = false;
    }
  }
}
