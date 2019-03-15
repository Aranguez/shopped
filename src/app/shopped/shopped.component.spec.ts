import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppedComponent } from './shopped.component';
import { Product } from '../models';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductModalComponent } from '../shared/product-modal/product-modal.component';
import { AddModalComponent } from '../shared/add-modal/add-modal.component';
import { ProductComponent } from '../product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ShoppedComponent', () => {
  let component: ShoppedComponent;
  let fixture: ComponentFixture<ShoppedComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  let FirestoreStub = {
    add: () => {

    },
    getProducts: ():Observable<Product[]> => {
      let products:Product[] = [{
        id: 3,
        name: 'product',
        price: 3440
      }]
      return of(products)
    },
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShoppedComponent,
        NavbarComponent,
        ProfileComponent,
        ProductsListComponent,
        ProductComponent,
        ProductModalComponent,
        AddModalComponent
      ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [
        { provide: ProductService, useValue: FirestoreStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when user clicks on `add product`', () => {

    beforeEach(() => {
      debugElement = fixture.debugElement.query(By.css('button'));
      htmlElement = debugElement.nativeElement;
    })
    
    it('should open `add product modal`', () => {
      spyOn(component, 'showAddModal').apply(htmlElement.click());
      expect(component.showAddModal).toHaveBeenCalled()
    })

  })

  
  

  // it('should return a product', () => {
  //   const product:Product = {
  //     id: 1,
  //     name: 'producto agregado 2',
  //     price: 5932
  //   }
  //   component.add();
  //   fixture.detectChanges();
  //   expect(component.add).toBe(product);
  // })
});
