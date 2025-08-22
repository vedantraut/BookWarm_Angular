import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeDTO } from '../../models/coffeeDTO';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coffee',
  imports: [FormsModule, RouterModule, NavBarComponent],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css',
})
export class CoffeeComponent {
  constructor(private coffeeService: CoffeeService) {}

  coffeeData: CoffeeDTO[] = [];
  filteredCoffeesData: CoffeeDTO[] = [];
  searchText: string = '';
  searchBy: any;
  toggleFilterDropdown: boolean = false;

  @ViewChild('filterDropdown') filterDropdown!: ElementRef | undefined;
  @ViewChild('filterIcon') filterIcon!: ElementRef | undefined;

  ngOnInit() {
    this.coffeeService.getCoffees().subscribe((data) => {
      console.log('All the coffees in the db are -- ', data);

      this.coffeeData = data as CoffeeDTO[];
      this.filteredCoffeesData = [...this.coffeeData];

      // For debugging purposes
      console.log('All the CoffeeDTO -- ', this.coffeeData);
    });
  }

  get filteredCoffees(): CoffeeDTO[] {
    if (!this.searchText) {
      return this.coffeeData;
    }

    // return this.coffeeData.filter((coffee) =>
    //   coffee.name.toLowerCase().startsWith(this.searchText.toLowerCase())
    // );

    const searchText = this.searchText.trim().toLowerCase();

    console.log('Filtered Coffees -- ' + this.filteredCoffeesData);

    console.log('Search Text -- ' + this.searchText);
    console.log('Search By -- ' + this.searchBy);

    switch (this.searchBy) {
      case 'name':
        return this.coffeeData.filter((coffee) =>
          coffee.name.toLowerCase().startsWith(searchText)
        );
      case 'coffeeType':
        return this.coffeeData.filter((coffee) =>
          coffee.coffeeType.toLowerCase().startsWith(searchText)
        );
      case 'price':
        return this.coffeeData.filter((coffee) =>
          coffee.price.toString().startsWith(searchText)
        );
      default:
        return this.coffeeData; // Default case if no valid searchBy is provided
    }
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
      icon &&
      !dropdown.contains(event.target) &&
      !icon.contains(event.target)
    ) {
      this.toggleFilterDropdown = false;
    }
  }
}
