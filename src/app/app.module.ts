import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductIdComponent } from './Component/product-id/product-id.component';
import { ProductComponent } from './Component/product/product.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { ProjectServiceService } from './service/project.service.service';
import { AddToCartComponent } from './Component/add-to-cart/add-to-cart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    ProductIdComponent,
    HomeComponent,
    AddToCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProjectServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
