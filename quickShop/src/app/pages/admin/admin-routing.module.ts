import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from '../admin-products/admin-products.component';
import { AdminUsersComponent } from '../admin-users/admin-users.component';
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
        path: 'users',
        component: AdminUsersComponent,
      },
      {
        path: 'products',
        component: AdminProductsComponent,
      },
    ],
  },
];

export const AdminRoutingModule = RouterModule.forChild(routes);
