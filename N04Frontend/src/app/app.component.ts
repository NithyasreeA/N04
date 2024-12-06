import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recent Innovations in Gen AI';

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }
}