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
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeatureInfoComponent } from './feature-info/feature-info.component';
import { WidgetSmallComponent } from './widget-small/widget-small.component';
import { WidgetLargeComponent } from './widget-large/widget-large.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    InfoComponent,
    CarouselComponent,
    ProductsLimitComponent,
    ProductHomepageComponent,
    AllProductsComponent,
    TopbarComponent,
    SidebarComponent,
    FeatureInfoComponent,
    WidgetSmallComponent,
    WidgetLargeComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddUserComponent,
    UpdateUserComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
    MatIconModule,
    NgxPaginationModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    InfoComponent,
    CarouselComponent,
    ProductsLimitComponent,
    ProductHomepageComponent,
    AllProductsComponent,
    TopbarComponent,
    SidebarComponent,
    FeatureInfoComponent,
    WidgetSmallComponent,
    WidgetLargeComponent,
    AddProductComponent,
    UpdateProductComponent,
    AddUserComponent,
  ],
})
export class ComponentsModule {}
