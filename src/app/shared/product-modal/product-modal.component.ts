import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  form:FormGroup;
  modalName:string = 'edit';
  show:boolean = false;

  constructor(private app:AppService, private fb:FormBuilder, private db:ProductService) {
    this.app.castEditModal.subscribe((value:boolean) => {
      this.show = value;
    })

    this.app.castProductToEdit.subscribe((product:Product) => {
      this.form.setValue({
        id: product.id,
        name: product.name,
        price: product.price
      })
    })

    this.createForm();
  }
  
  ngOnInit() {
  }

  createForm(): void{
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/\w{3,}/)
      ])],
      price: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/\w{3,}/)
      ])]
    })
  }

  hideModal(): void{
    this.app.hideEditModal();
  }

  edit(): void{
    const editedProduct = {
      name: this.form.controls.name.value,
      price: this.form.controls.price.value
    }
    this.db.edit(this.form.value.id, editedProduct);
    this.hideModal();
  }

}
