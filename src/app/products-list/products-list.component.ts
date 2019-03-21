import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList:Product[] = [];

  constructor(
    private db:ProductService,
    private products:ProductService,
    private app:AppService) {
    this.db.getProducts().subscribe(data => {
      this.productsList = data;
    });
  }

  ngOnInit() {
  }

  buy(productId:number){
    this.products.buy(productId);
  }
  delete(id:string){
    this.products.remove(id);
  }
  
  showEditModal(product:Product){
    this.app.showEditModal(product);
  }

  trackByFn(index:number, item:Product){
    return item.id;
  }

}
