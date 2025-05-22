import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '5-contable-demo';
  menuOption: string = ''

  constructor(private authService: AuthService, private router: Router) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    console.log('LOG OUT');
    this.authService.logout();
    this.router.navigate(['/']);
  }
  
  onOption(menuOption: string){
    this.menuOption = menuOption
  }
}
