import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from './product';
import { SweetsCategory } from './sweetsCategory';
import { ProductService } from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {

constructor(private productService: ProductService) { }

  title = 'Sweets Shop';

  SweetsCategory = SweetsCategory;

  inBusket: boolean = false;
  productIsSelected: boolean = false;

  products: Product[];

  selectedProduct: Product;

  OnBuy() {
    this.inBusket = true;
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(prod: Product): void {
    this.selectedProduct = prod;
    this.productIsSelected = true;
  }
}
