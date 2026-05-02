import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationRequest } from '../../models/registeration-request';
import { ErrorNotificationService } from '../../services/error-notification.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerRequest!: RegisterationRequest;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private errorNotificationService: ErrorNotificationService
  ) {}

  ngOnInit() {
    this.registerRequest = {
      email: '',
      userName: '',
      password: '',
      role: 'user',
    };
  }

  register() {
    console.log('registerRequest:', this.registerRequest);
    this.registerService.register(this.registerRequest).subscribe(
      (response: any) => {
        console.log('Registration response:', response);
        alert('Registration successful! Please login.');
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Registration error:', error);
        const errorMessage = this.errorNotificationService.getErrorMessage(error.error);
        this.errorNotificationService.showError(errorMessage);
      }
    );

  }
}
