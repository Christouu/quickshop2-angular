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
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    RegisterComponent,
    ProductsSaleComponent,
    CartComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProductRoutingModule,
    AdminRoutingModule,
    ComponentsModule,
    HttpClientModule,
    MatIconModule,
    NgxPaginationModule,
  ],
})
export class PagesModule {}
