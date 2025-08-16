import { Component } from '@angular/core';
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
    console.log('Search Text -- ' + this.searchText);

    return this.coffeeData.filter((coffee) =>
      coffee.name.toLowerCase().startsWith(this.searchText.toLowerCase())
    );

    console.log('Filtered Coffees -- ' + this.filteredCoffeesData);

    // return this.filteredCoffeesData;
  }
}
