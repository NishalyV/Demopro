import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProductsComponent]
})
export class ProductModule { }