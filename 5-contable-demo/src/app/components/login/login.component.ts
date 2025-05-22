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
          alert('Error al iniciar sesión');
          console.error(err);
        }
      });
    }
  }

}
