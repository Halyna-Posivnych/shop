import { Component, Input } from '@angular/core';

import { Product } from './product';

@Component({
  selector: 'product-list',
  template: `
    <div>
    <h4>All Sweets</h4>
      <div *ngFor="let prod of productList" style="float: left; text-align: center;">
      <img width="100" src={{prod.imgUrlPath}} />
        <p >{{prod.name}}</p>
      </div>
    </div>
    `
})
export class ProductListComponent {
    @Input() productList: Product[];
}