import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface, ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  product_id: string = '';
  private productService = inject(ProductsService)
  product_selected : ProductInterface | undefined = undefined
  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      (params) => {
        this.product_id = params.get('product_id') || ''
        const product_detail_observable = this.productService.getProductById(Number(this.product_id))
        product_detail_observable.subscribe(
          {
            next: (product_detail) =>{
              this.product_selected = product_detail
          
            },
            error: () => {
              
            }
          }
        )
      }
    )
  }
}


