import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  /* 
  @Input es un decorador que nos permite pasar informacion del componente padre al componente hijo (Como una prop en React)
  */
  @Input() nombre : string = ''
  @Input() precio : number = 0
}
