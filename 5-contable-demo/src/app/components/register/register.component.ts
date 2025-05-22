
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;

  
  constructor(private authService: AuthService, private fb: FormBuilder, 
    private _apiService: ApiService, private router: Router) {
    
      this.registerForm = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required],
      //role: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }

  }

  onSubmit() {
    if (this.registerForm.valid) {
      this._apiService.registerUser(this.registerForm.value).subscribe({
        next: (res) => {
          alert('Usuario registrado correctamente');
          this.registerForm.reset();
        },
        error: (err) => {
          alert('Error al registrar usuario');
          console.error(err);
        }
      });
    }
  }

}
