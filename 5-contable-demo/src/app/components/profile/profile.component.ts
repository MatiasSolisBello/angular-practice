import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  nombre: string | null = null;
  role: string | null = null;

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    const payload = this.authService.getPayload();
    if (payload) {
      console.log(payload);
      this.nombre = payload.nombre;
      this.role = payload.role;
    }
  }

}
