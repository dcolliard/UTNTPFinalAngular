import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


export interface ProductInterface {
  title: string,
  description: string,
  img: string,
  price: number,
  discount: number,
  installments: number,
  is_same_price_with_intallments: boolean,
  arrives_free: boolean,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsURL = '/products.json'
  constructor(private http : HttpClient) {}

  getProducts () : Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.productsURL)
  }

  getProductById(product_id : number): Observable<ProductInterface | undefined>{
    /* metodo .pipe nos permitira trabajar sobre el retorno de un observable */
    return this.http.get<ProductInterface[]>(this.productsURL).pipe(
      map(products => products.find(product => product.id === product_id))
    )
  }
}
