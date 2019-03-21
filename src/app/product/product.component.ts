import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input('product') product:Product = null;

  @Output() outBuy = new EventEmitter();
  @Output() outEdit = new EventEmitter();
  @Output() outDelete = new EventEmitter();

  constructor() { }
}
