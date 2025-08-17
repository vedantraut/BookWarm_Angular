import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AuthenticationRequest } from '../../models/authentication-request';

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

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  onLogin() {
    console.log('Email:', this.authRequest.emailId);
    console.log('Password:', this.authRequest.password);

    this.loginService.login(this.authRequest).subscribe((response) => {
      console.log('Login response:', response);
      // Handle successful login response
    });
  }
}
