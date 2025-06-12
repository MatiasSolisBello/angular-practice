import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  listProducts?: Producto[];
  role: string | null = null;
  
  constructor(private productService: ProductService,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    const payload = this.authService.getPayload();
    if (payload) {
      this.role = payload.role;
    }
    this.cargarProducto();
  }

  cargarProducto(){
    this.productService.getProducts().subscribe(data => {
      this.listProducts = data;
    });
  }


  deleteProducto(_id: string) {
    this.productService.deleteProducto(_id).subscribe({
      next: () => this.cargarProducto(),
      error: err => console.error("Error al eliminar producto:", err)
    })
  }
}
