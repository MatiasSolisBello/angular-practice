import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Producto } from '../models/Producto';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  const url = 'http://localhost:5000/api/producto';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get all products', () => {
    const dummyData: Producto[] = [
      {
        "_id": "1",
        "nombre": "Cafetera prensa francesa",
        "descripcion": "Vierte agua caliente",
        "precio": 9990,
        "stock": 20,
        "bodega": {
          "_id": "1",
          "nombre": "Bodega Central",
          "direccion": "Av. Chile #653, Estacion Central"
        },
        "imagen": "http://localhost:5000/uploads/image.png",
      },
      {
        "_id": "2",
        "nombre": "Filtro reutilizable de acero",
        "descripcion": "El filtro reutilizable de acero",
        "precio": 100,
        "stock": 333,
        "bodega": {
          "_id": "2",
          "nombre": "Bodega Norte",
          "direccion": "Av. Chocalan #645, Melipilla"
        },
        "imagen": "http://localhost:5000/uploads/imagen2.png",
      }
    ];

    service.getProducts().subscribe((products: Producto[]) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(dummyData);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });

  it('should get one product by id', () => {
    const dummyData: Producto = {
      "_id": "1",
      "nombre": "Cafetera prensa francesa",
      "descripcion": "Vierte agua caliente",
      "precio": 9990,
      "stock": 20,
      "bodega": {
        "_id": "1",
        "nombre": "Bodega Central",
        "direccion": "Av. Chile #653, Estacion Central"
      },
      "imagen": "http://localhost:5000/uploads/image.png",
    };

    const productId = '1';
    service.getProductById(productId).subscribe((product: Producto) => {
      expect(product).toEqual(dummyData);
    });

    const req = httpMock.expectOne(`${url}/${productId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });
});
