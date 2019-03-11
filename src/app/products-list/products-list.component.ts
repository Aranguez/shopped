import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [
    {
      name: 'product1',
      price: 800
    },
    {
      name: 'product1',
      price: 800
    },
    {
      name: 'product1',
      price: 800
    },
    {
      name: 'product1',
      price: 800
    },
  ]

  constructor(private db:ProductService) {
    this.db.getData()
  }

  ngOnInit() {
  }

}
