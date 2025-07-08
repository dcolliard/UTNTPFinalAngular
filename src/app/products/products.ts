import { Component, inject } from '@angular/core';

import { ProductInterface, ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products : ProductInterface[] = []
  loading : boolean = true
  private productsService = inject(ProductsService)
  ngOnInit(){
    const products_observable = this.productsService.getProducts()
    products_observable.subscribe(
      {

        next: (products) => {
            this.products = products
            this.loading = false
        },
        error: (error) => {
          console.log(error)
        }
      }
    )
  }
}
