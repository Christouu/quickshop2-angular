import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsLimitComponent } from './products-limit/products-limit.component';
import { ProductHomepageComponent } from './product-homepage/product-homepage.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './all-products/all-products.component';

@NgModule({
  declarations: [
    InfoComponent,
    CarouselComponent,
    ProductsLimitComponent,
    ProductHomepageComponent,
    AllProductsComponent,
  ],
  imports: [CommonModule, MatIconModule, RouterModule, HttpClientModule],
  exports: [
    InfoComponent,
    CarouselComponent,
    ProductsLimitComponent,
    ProductHomepageComponent,
    AllProductsComponent,
  ],
})
export class ComponentsModule {}
