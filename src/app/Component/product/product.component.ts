import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectServiceService } from 'src/app/service/project.service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  protected $categories: Observable<string[]> =
    this.service.getAllCategoryies();
  protected $products = this.service.getProperty();
  protected selectedCategory = 'All';
  constructor(private service: ProjectServiceService) {}

  protected trackCategories(index: number, value: string) {
    return value;
  }

  protected getProducts(category: string) {
    this.selectedCategory = category;
    if (category.toLowerCase() === 'all')
      this.$products = this.service.getProperty();
    else this.$products = this.service.getProductsByCategory(category);
  }
}
