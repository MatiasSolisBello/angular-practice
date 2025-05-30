import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
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
    private fb: FormBuilder, private _bodegaService: BodegaService,
    private _productService: ProductService
  ){
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', [Validators.required]],
      stock: ['', Validators.required],
      imagen: [''],
      bodega: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }

    this._bodegaService.getBodegas().subscribe(data => {
      this.bodega = data;
    });
  }


  onSubmit() {
    if (this.productForm.valid) {
      if (this.IdProducto) {
        //this._productService.updateProduct(this.IdProducto, this.productForm.value).subscribe(data => {
        //this.router.navigate(['/product']);
        //console.log('Updating product:', this.productForm.value);
      } else {
        console.log(this.productForm.value);
        this._productService.createProduct(this.productForm.value).subscribe(data => {
          console.log('data: ', data);
          this.router.navigate(['/product']);
        }, error => {
          console.error('Error creating product:', error);
        });
      }
    } else {
      console.error('Form is invalid');
    }
  }

}
