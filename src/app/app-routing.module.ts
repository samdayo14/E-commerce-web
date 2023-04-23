import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddToCartComponent } from './Component/add-to-cart/add-to-cart.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductIdComponent } from './Component/product-id/product-id.component';
import { ProductComponent } from './Component/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'product', component: ProductComponent },
  {
    path: 'productId/:id',
    component: ProductIdComponent,
  },
  { path: 'add-to-cart', component: AddToCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
