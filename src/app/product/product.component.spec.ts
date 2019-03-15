import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductService } from '../services/product.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AppComponent } from '../app.component';
import { SearchComponent } from '../search/search.component';
import { ShoppedComponent } from '../shopped/shopped.component';
import { ProfileComponent } from '../profile/profile.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductModalComponent } from '../shared/product-modal/product-modal.component';
import { AddModalComponent } from '../shared/add-modal/add-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductComponent,
       ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
      ],
      providers: [
        ProductService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
