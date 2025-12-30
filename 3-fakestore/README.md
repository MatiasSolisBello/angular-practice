## Resumen del proyecto

<img src="https://raw.githubusercontent.com/MatiasSolisBello/angular-practice/refs/heads/main/img/project-3.png" alt="Alt Text" width="600" height="600">

## Codigo clave

Service

```javascript
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Obtener link
  private urlBase: string = 'https://fakestoreapi.com/products';

  constructor(private _http: HttpClient){ }

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.urlBase);
  }
}
```

Componente
```javascript
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
}
```

HTML
```html
<!--for productList-->
<div class="col mb-4" *ngFor="let product of productList; let i = index;">
  <div class="card">
    <img class="card-img-top mx-auto d-block" [src]="product.image" [alt]="product.title">
    <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.price | currency:'USD':'symbol' }}</p>
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-outline-primary" 
            (click)="navegate(product.id)">Details
          </button>
        </div>
    </div>
  </div>
</div>
```
