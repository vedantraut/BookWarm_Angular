import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorNotificationService {
  private lastErrorTime: number = 0;
  private readonly MIN_ALERT_INTERVAL = 200; // Prevent alert spam (ms)

  /**
   * Show an error alert with the provided message
   * @param message The error message to display
   */
  showError(message: string): void {
    const currentTime = Date.now();
    
    // Prevent alert spam
    if (currentTime - this.lastErrorTime < this.MIN_ALERT_INTERVAL) {
      return;
    }
    
    this.lastErrorTime = currentTime;
    alert(message);
  }

  /**
   * Extract error message from backend response
   * @param error The error object from HttpClient
   * @returns The error message string
   */
  getErrorMessage(error: any): string {
    // If error has a message property (custom backend response)
    if (error?.error?.message) {
      return error.error.message;
    }

    // If error has an error property with string message
    if (typeof error?.error === 'string') {
      return error.error;
    }

    // If error has status code and statusText (HTTP error)
    if (error?.status && error?.statusText) {
      return `Error ${error.status}: ${error.statusText}`;
    }

    // Default error message
    return 'An error occurred. Please try again.';
  }
}
