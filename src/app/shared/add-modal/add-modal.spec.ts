import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddModalComponent } from './add-modal.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../app/services/product.service';

describe('AddModalComponent', () => {
  let component: AddModalComponent;
  let fixture: ComponentFixture<AddModalComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  let productServiceSpy: jasmine.SpyObj<ProductService>;

  beforeEach(async(() => {
    productServiceSpy = jasmine.createSpyObj('product service', ['add', 'getProducts', 'remove', 'edit'])

    TestBed.configureTestingModule({
      declarations: [ AddModalComponent ],
      imports: [ FormsModule, ReactiveFormsModule ],
      providers: [
        { provide: ProductService, useValue: productServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('when user complete form', () => {
  //   beforeEach(() => {
  //     it('should be all valid', () => {

  //     })
  //   })
  // })
})