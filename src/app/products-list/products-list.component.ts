import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:Product[] = []

  constructor(private db:ProductService) {
    this.db.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  ngOnInit() {
  }

  trackByFn(index:number, item:Product){
    return item.id;
  }

}
