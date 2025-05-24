import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  listProducts?: Producto[];
  
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.cargarProducto();
  }

  cargarProducto(){
    this.productService.getProducts().subscribe(data => {
      this.listProducts = data;
    });
  }
}
