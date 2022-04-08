import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './products/products-routing.module';
import { RegisterComponent } from './register/register.component';
import { ProductsSaleComponent } from './products-sale/products-sale.component';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    RegisterComponent,
    ProductsSaleComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ComponentsModule,
    HttpClientModule,
  ],
})
export class PagesModule {}
