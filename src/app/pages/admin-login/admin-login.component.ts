import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [MatCard, MatCardTitle, MatFormField, MatLabel, FormsModule, MatInputModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  
  login() {
    throw new Error('Method not implemented.');
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
