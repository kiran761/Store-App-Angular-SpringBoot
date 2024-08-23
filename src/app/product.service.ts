import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  fetchAllProducts(){
    let url="http://localhost:7777/store/allProducts"
    return this.http.get<Product[]>(url);
  }
}
