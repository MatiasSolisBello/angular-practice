import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nombreUsuario: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const payload = this.authService.getPayload();
    if (payload) {
      this.nombreUsuario = payload.nombre;
    }
  }

}
