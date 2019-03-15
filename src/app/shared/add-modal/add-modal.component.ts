import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//models
import { Product } from '../../models/product';
//services
import { AppService } from '../../services/app.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent {
  form:FormGroup;
  modalName:string = 'add';
  show:boolean = false;

  constructor(private app:AppService, private fb:FormBuilder, private db:ProductService) {
    this.app.castAddModal.subscribe((value:boolean) => {
      this.show = value;
    })
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
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

  clearForm() :void{
    this.form.setValue({
      name: '',
      price: '',
    })
  }

  hideModal(){
    this.app.hideAddModal();
  }

  add(){
    const newProduct:Product = {
      id: this.ID(),
      name: this.form.controls.name.value,
      price: this.form.controls.price.value,
      isBought: false
    }
    this.db.add(newProduct).then(() => this.clearForm());
    this.hideModal();
  }

  ID() {
    return Math.random().toString(36).substr(2, 9);
  };
}
