import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BodegaService } from '../../../services/bodega.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-form-bodega',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-bodega.component.html',
  styleUrl: './form-bodega.component.css'
})
export class FormBodegaComponent {
  bodegaForm!: FormGroup;
  action: string = 'Crear';
  IdBodega: string = '';
  usuario: any[] = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private _bodegaService: BodegaService, private router: Router, 
    private _userService: UserService
  ) {
    this.bodegaForm = this.fb.group({
      numero: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
      usuario: [''],
    });
  }

  ngOnInit(): void {
    this.IdBodega = this.route.snapshot.params["id"]
    if (this.IdBodega) {
      this.esEditar();
    } else {
      this.action = 'Crear';
    }

    this._userService.getUsers().subscribe(data => {
      this.usuario = data;
    });
  }

  onSubmit() {
    if (this.bodegaForm.valid) {
      console.log('IdBodega: ', this.IdBodega); 
      console.log(' Form Value: ', this.bodegaForm.value);
      if (this.IdBodega) {
        this._bodegaService.updateBodega(this.IdBodega, this.bodegaForm.value).subscribe(data => {
          console.log('bodega actualizado', data);
          this.router.navigate(['/bodega']);
        }, error => {
          console.error('Error al actualizar el bodega', error);
        });
      } else {
        this._bodegaService.createBodega(this.bodegaForm.value).subscribe(data => {
          console.log('bodega creado', data);
          this.router.navigate(['/bodega']);
        }, error => {
          console.error('Error al crear el bodega', error);
        });
      }
    } else {
      console.error('Formulario inválido');
    }
  }


  esEditar(){
    this.action = 'Editar';
    this._bodegaService.getBodegaById(this.IdBodega).subscribe(data => {
      console.log('DATA: ', data);
      this.bodegaForm.patchValue({
        numero: data.numero,
        nombre: data.nombre,
        direccion: data.direccion,
        descripcion: data.descripcion,
        estado: data.estado,
        usuario: data.usuario ? data.usuario._id : ''
      });
    });
  }

}
