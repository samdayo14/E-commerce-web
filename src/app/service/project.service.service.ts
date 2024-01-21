import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProjectServiceService {
  items: Product[] = [];
  private baseUrl: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }
  

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getProperty(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getProductId(id: Number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  getAllCategoryies(): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.baseUrl}/categories`)
      .pipe(map((data) => ['All', ...data]));
  }

  getProductsByCategory(category?: string) {
    return this.http.get(`${this.baseUrl}/category/${category}`);
  }
}
