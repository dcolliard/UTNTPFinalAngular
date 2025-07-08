import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';

/* 
Un componente es un conjunto de HTML, CSS y JS 
*/
//Decorador
@Component({
  selector: 'app-root', //Es el nombre con el que despues podremos instanciar a nuestro componente
  imports: [RouterOutlet], //... Debemos indicar todas las importaciones que usara nuestro componente
  templateUrl: './app.html', //Direccion de donde estara el HTML de nuestro
  styleUrl: './app.css'
})
export class App {
  


}

//NOTA: App no es una clase generica de JS sino que es un Component de Angular, porque tiene el decorador @Component encima de su declaracion