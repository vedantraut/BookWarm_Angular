import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {

  constructor(private router: Router) {}

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('userId');
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
