import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-products-detail',
  imports: [CommonModule, RouterModule],
  standalone: true,
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit {

  loading: boolean = true;
  public product?: IProduct;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService,
  ) {}


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        console.log(data);
        this.product = data
        this.loading = false;
      });
    }
    )
  }

  goBack() {
    window.history.back();
  }

}
