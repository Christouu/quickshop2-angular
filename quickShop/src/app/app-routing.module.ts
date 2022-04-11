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
    data: { animation: 'isRight' },
  },
  {
    path: 'sale',
    component: ProductsSaleComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'cart',
    component: CartComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { animation: 'isLeft' },
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
});
