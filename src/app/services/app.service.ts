import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private addModal = new BehaviorSubject<boolean>(false);
  private editModal = new BehaviorSubject<boolean>(false);
  private userModal = new BehaviorSubject<boolean>(false);
  private productToEdit:Subject<Product> = new Subject();

  castAddModal = this.addModal.asObservable();
  castEditModal = this.editModal.asObservable();
  castUserModal = this.userModal.asObservable();
  castProductToEdit = this.productToEdit.asObservable();

  constructor() { }

  showAddModal(){
    this.addModal.next(true);}
  hideAddModal(){
    this.addModal.next(false);}

  showEditModal(product:Product){
    this.editModal.next(true);
    this.productToEdit.next(product)}
  hideEditModal(){
    this.editModal.next(false);}

  showUserModal(){
    this.userModal.next(true);}
  hideUserModal(){
    this.userModal.next(false);}
}
