import { Component } from '@angular/core';

import { AuthService } from './../Services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginform',
  imports:[CommonModule,FormsModule],
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      const success = this.authService.login(
        this.credentials.username,
        this.credentials.password
      );

      if (success) {
        console.log('Login successful');
        this.router.navigate(['/']); // Redirect to home
      } else {
        alert('Invalid username or password!');
      }

      form.reset();
    }
  }

  onForgotPassword() {
    alert('Redirect to Forgot Password page!');
  }
}
