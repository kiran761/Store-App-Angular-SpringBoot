import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productData: Product[] = [];
  constructor(private datatService: DataService , private productService:ProductService) {
    this.productService.fetchAllProducts().subscribe(data =>
      this.productData = data
      
    );
  console.log(this.productData);
  }

  
  

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.fetchAllProducts().subscribe(data=>this.productData=data);
    console.log(this.productData);
  }

  
}