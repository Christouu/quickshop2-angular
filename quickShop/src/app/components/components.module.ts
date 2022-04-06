import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsLimitComponent } from './products-limit/products-limit.component';
import { ProductHomepageComponent } from './product-homepage/product-homepage.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InfoComponent,
    CarouselComponent,
    ProductsLimitComponent,
    ProductHomepageComponent,
  ],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [
    InfoComponent,
    CarouselComponent,
    ProductsLimitComponent,
    ProductHomepageComponent,
  ],
})
export class ComponentsModule {}
