import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

import { ProjectServiceService } from 'src/app/service/project.service.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent{
 form:FormGroup
  errorMessage = '';
  errorAddress = '';
  items = this.service.getItems();
  item$:Product[]=[]


  constructor(
    private service: ProjectServiceService,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.nonNullable.group({
      name: this.fb.nonNullable.control(''),
      address: this.fb.nonNullable.control(''),
    });
    
  }

  // ngOnInit(): void {
  //   const storedItems = localStorage.getItem('cartItems');
  // this.items = storedItems ? JSON.parse(storedItems) : [];
  // }

  addToCart(product: Product) {
    this.service.addToCart(product);
    // this.updateLocalStorage();
  }

  onSubmit(event:Event): void {
    const {name, address} = this.form.value
    if (name === '') {
      this.errorMessage = "Name can't be empty";
    } else {
      this.errorMessage = ''
    }
    if(address === '') {
      this.errorAddress = "Address can't be empty"
    } else {
      this.errorAddress = ""
    }

    if (name !== '' || address !== '') {
      this.items = this.service.clearCart();
      // this.updateLocalStorage()
    }
     this.form.reset()

   
  }
  


  deleteItem(id:number){
    const index = this.items.findIndex(item => item.id === id)

    if(index !== 1) {
      this.items.splice(index,1);
      // this.updateLocalStorage();
    }
  }

  total() {
    return this.items.reduce((acc,item) => 
       acc + item.price,0)
  }

  // private updateLocalStorage(): void {
  // console.log('Updating local storage:', this.items);
  //   localStorage.setItem('cartItems', JSON.stringify(this.items));
  // }
}
