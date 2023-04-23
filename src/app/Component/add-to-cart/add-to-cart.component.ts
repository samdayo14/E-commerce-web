import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ProjectServiceService } from 'src/app/service/project.service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  $forms = '';
  errorMessage = '';
  items = this.service.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(
    private service: ProjectServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.service.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  onSubmit(): void {
    if (!this.$forms) {
      this.errorMessage = "Name can't be empty";
      setTimeout(() => {
        this.errorMessage = '';
      }, 5000);
    } else {
      this.errorMessage = '';
    }
    this.items = this.service.clearCart();
    console.log('you have submitted you orders!', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
