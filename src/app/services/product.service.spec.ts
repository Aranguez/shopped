import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  // let FirestoreStub = {
  //   collection: (name: string) => ({
  //     doc: (_id: string) => ({
  //       valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
  //       set: (_d: any) => new Promise((resolve, _reject) => resolve()),
  //     }),
  //   }),
  // }

  let productServiceSpy: jasmine.SpyObj<ProductService>;
  
  beforeEach(() => {
    productServiceSpy = jasmine.createSpyObj('product service', ['add', 'getProducts', 'remove', 'edit'])

    TestBed.configureTestingModule({
      providers: [{ 
        provide: ProductService, 
        useValue: productServiceSpy
      }]
    })
  });

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
