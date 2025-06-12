import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BodegaService } from '../../../services/bodega.service';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-form-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent implements OnInit{
  productForm!: FormGroup;
  action: string = 'Crear';
  IdProducto: string = '';
  bodega: any[] = [];

  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder, private _bodegaService: BodegaService,
    private _productService: ProductService
  ){
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required]],
      stock: ['', Validators.required],
      imagen: [''],
      bodega: ['']
    });
  }

  ngOnInit(): void {
    this.IdProducto = this.route.snapshot.params["id"]
    if (this.IdProducto) {
      this.esEditar();
    } else {
      this.action = 'Crear';
    }

    this._bodegaService.getBodegas().subscribe(data => {
      this.bodega = data;
    });
  }
  producto: any = {};
  imagen: File | null = null;
  imagenSeleccionada: File | null = null;

  onFileChange(event: any) {
    this.imagen = event.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();

    // Agrega campos del formulario
    Object.keys(this.productForm.value).forEach(key => {
      const valor = this.productForm.value[key];
      if (valor !== null && valor !== undefined) {
        formData.append(key, valor);
      }
    });

    // Agrega imagen solo si hay una nueva
    if (this.imagenSeleccionada) {
      formData.append('imagen', this.imagenSeleccionada);
    }

    if (this.IdProducto) {
      this._productService.updateProducto(this.IdProducto, formData).subscribe(data => {
        this.router.navigate(['/product']);
      }, error => {
        console.error('Error al actualizar el producto', error);
      });
    } else {
      this._productService.createProduct(formData).subscribe(data => {
        this.router.navigate(['/product']);
      }, error => {
        console.error('Error al crear el producto', error);
      });
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imagenSeleccionada = input.files[0];
    }
  }


  esEditar(){
    this.action = 'Editar';
    this._productService.getProductById(this.IdProducto).subscribe(data => {
      this.productForm.patchValue({
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
        stock: data.stock,
        bodega: data.bodega ? data.bodega._id : ''
      });
    }, error => {
      console.error('Error fetching product:', error);
    });
  }

}
