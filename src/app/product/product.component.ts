import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models';
import { AppService } from '../services/app.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input('product') product:Product = null;

  constructor(
    private products:ProductService,
    private app:AppService,
    private userService:UserService
  ) { }

  buy(productId:number, amount:number){
    this.userService.buy(amount);
    this.products.buy(productId);
  }

  edit(product:Product){
    this.app.showEditModal(product);
  }

  delete(id:string){
    this.products.remove(id);
  }
}
