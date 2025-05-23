import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  errorMessage = "";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private _apiService: ApiService, 
              private router: Router) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this._apiService.login(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        },
        error: (err) => {
          const defaultMessage = 'Error inesperado. Intente nuevamente más tarde.';

          switch (err.status) {
            case 0:
              this.errorMessage = 'No se puede conectar con el servidor. Verifica tu conexión o que el servidor esté en línea.';
              break;
            case 401:
              this.errorMessage = err.error?.message || 'Credenciales inválidas';
              break;
            case 500:
              this.errorMessage = err.error?.message || 'Error del servidor';
              break;
            default:
              this.errorMessage = defaultMessage;
          }
        }
      });
    }
  }

}
