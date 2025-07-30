import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  imports: [MatCard, MatCardTitle, MatFormField, MatLabel, FormsModule, MatInputModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}
  
  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        console.log("it is hitting next");
        this.router.navigate(['/admin']);
      },

      error: () => alert('Login Failed'),
    })
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
