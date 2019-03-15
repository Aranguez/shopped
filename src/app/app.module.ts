import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ShoppedComponent } from './shopped/shopped.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { ProductService } from './services/product.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProductModalComponent } from './shared/product-modal/product-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddModalComponent } from './shared/add-modal/add-modal.component';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShoppedComponent,
    ProfileComponent,
    NavbarComponent,
    ProductComponent,
    ProductsListComponent,
    ProductModalComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
