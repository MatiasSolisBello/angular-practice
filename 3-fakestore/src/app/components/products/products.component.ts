import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: IProduct[] = []

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
    });
  }

  navegate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
