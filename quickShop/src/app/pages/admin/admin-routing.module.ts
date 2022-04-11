import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: AdminComponent,
      },
      {
        path: ':id',
        component: ProductComponent,
      },
    ],
  },
];

export const AdminRoutingModule = RouterModule.forChild(routes);
