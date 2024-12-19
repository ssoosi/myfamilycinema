import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('user'); // Clear the user session
    this.router.navigate(['/login']); // Redirect to the login page
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user'); // Check if user data exists in localStorage
  }
  
}
