import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products : Product[]=[];
  constructor() {

    

    this.products = [
    ];
    
      

    }
    getProducts(): Product[] {
      return this.products;
    }

    // addProduct(product: Product) {
    //   this.products.push(product);
    // }

}
