import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: IProduct[] = []
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getAllProducts()

    this._apiService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  getAllProducts() {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.productList = data;
    });
  }

  filterByCategory(category: string) {
    if (category === '') {
      this.getAllProducts();
    } else {
      this._apiService.getProductsByCategory(category).subscribe(data => {
        this.productList = data;
      });
    }
  }

  navegate(id: number): void {
    this._router.navigate(['/products', id]);
  }
}
