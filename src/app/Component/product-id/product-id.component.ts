import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { ProjectServiceService } from 'src/app/service/project.service.service';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css'],
})
export class ProductIdComponent implements OnInit {
  constructor(
    private service: ProjectServiceService,

    private route: ActivatedRoute
  ) {}
  productId: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.getProductId(params['id']));
  }

  getProductId(id: Number) {
    this.service.getProductId(id).subscribe((result) => {
      this.productId = result;
    });
  }

  addToCart(product: Product): void {
    this.service.addToCart(product);
    window.alert('Product has been added to the cart!');
  }
}
