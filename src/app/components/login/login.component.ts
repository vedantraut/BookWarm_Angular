import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AuthenticationRequest } from '../../models/authentication-request';
import { Router } from '@angular/router';
import { ErrorNotificationService } from '../../services/error-notification.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // authRequest: AuthenticationRequest | undefined;

  authRequest: { emailId: string; password: string } = {
    emailId: '',
    password: '',
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private errorNotificationService: ErrorNotificationService
  ) {}

  ngOnInit() {}

  onLogin() {
    this.loginService.login(this.authRequest).subscribe({
      next: (response: any) => {
        console.log('Login response:', response); 
        // Handle successful login response
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userId', response.userId.toString());
        this.router.navigate(['/books']);
      },
      error: (error: any) => {
        console.error('Login error:', error);
        const errorMessage = this.errorNotificationService.getErrorMessage(error);
        this.errorNotificationService.showError(errorMessage);
      },
      complete: () => {
        // console.log('Login request completed');
      }
    });
  }

  goToRegisteration() {
    this.router.navigate(['/register']);
  }
}
