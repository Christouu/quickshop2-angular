import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductsSaleComponent } from './pages/products-sale/products-sale.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: { animation: '1' },
  },
  {
    path: 'sale',
    component: ProductsSaleComponent,
    data: { animation: '2' },
  },
  {
    path: 'cart',
    component: CartComponent,
    data: { animation: '3' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: '4' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: '5' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { animation: '6' },
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
});
