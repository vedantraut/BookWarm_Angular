import { Component } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { CoffeeDTO } from '../../models/coffeeDTO';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-coffee',
  imports: [RouterModule, NavBarComponent],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css',
})
export class CoffeeComponent {
  constructor(private coffeeService: CoffeeService) {}

  coffeeData: CoffeeDTO[] = [];

  ngOnInit() {
    this.coffeeService.getCoffees().subscribe((data) => {
      console.log('All the coffees in the db are -- ' + data);

      this.coffeeData = data as any[];
      console.log('All the CoffeeDTO -- ' + this.coffeeData);
    });
  }
}
