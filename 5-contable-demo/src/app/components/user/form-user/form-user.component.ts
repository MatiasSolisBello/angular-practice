import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-form-user',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent implements OnInit {
  userForm!: FormGroup;
  action : string = 'Crear';
  IdUsuario: string = '';

  constructor(private authService: AuthService, 
              private fb: FormBuilder, private route: ActivatedRoute,
    private _userService: UserService, private router: Router) {

    this.userForm = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      //clave: ['', Validators.required],
      role: ['', Validators.required]
    });

    
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
    this.IdUsuario = this.route.snapshot.params["id"]
    if (this.IdUsuario) {
      this.esEditar();
    } else {
      this.action = 'Crear';
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.IdUsuario) {
        this._userService.updateUser(this.IdUsuario, this.userForm.value).subscribe(data => {
          this.router.navigate(['/user']);
        }, error => {
          console.error('Error al actualizar el usuario', error);
        });
      } else {
        this._userService.createUser(this.userForm.value).subscribe(data => {
          this.router.navigate(['/user']);
        }, error => {
          console.error('Error al crear el usuario', error);
        });
      }
    } else {
      console.error('Formulario inválido');
    }
    
  }

  esEditar(){
    this.action = 'Editar';
    this._userService.getUserById(this.IdUsuario).subscribe(data => {
      //this.userForm = data;
      this.userForm.patchValue({
        id: data._id,
        rut: data.rut,
        nombre: data.nombre,
        correo: data.correo,
        //clave: data.clave,
        role: data.role
      });
    });

  }

}
