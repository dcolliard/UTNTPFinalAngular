import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProductInterface, ProductsService } from '../services/products.service';
import { registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeEsAR);

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products : ProductInterface[] = []
  loading : boolean = true
  private productsService = inject(ProductsService)
  comprar(productTitle: string){
    alert(`Comprado: ${productTitle}`)
  }
  getDiscountPercent(discount: number): number {
    return Number((discount * 100).toFixed(2));
  }

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
