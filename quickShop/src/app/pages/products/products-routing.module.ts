import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProductsComponent,
      },
      {
        path: ':id',
        component: ProductComponent,
      },
    ],
  },
];

export const ProductRoutingModule = RouterModule.forChild(routes);
