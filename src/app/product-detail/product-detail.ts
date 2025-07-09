import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { ProductInterface, ProductsService } from '../services/products.service';
import { registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';
import { LOCALE_ID } from '@angular/core';
@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }]
})
export class ProductDetail {
  product_id: string = '';
  private productService = inject(ProductsService)
  product : ProductInterface | undefined = undefined
  getDiscountPercent(discount: number): number {
    return Number((discount * 100).toFixed(2));
  }
  comprar(productTitle: string){
    alert(`Comprado: ${productTitle}`)
  }
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
              this.product = product_detail
          
            },
            error: () => {
              
            }
          }
        )
      }
    )
  }
}


