import { Component } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  nombre = 'pedro' //Esto es un atributo, pero pueden entenderlo como una variable interna del componente app
  contador = 0
  productos = [
    {
      nombre: 'Producto 1',
      precio: 10,
      id: 1
    },
    {
      nombre: 'Producto 2',
      precio: 20,
      id: 2
    },
    {
      nombre: 'Producto 3',
      precio: 30,
      id: 3
    },
    {
      nombre: 'Producto 4',
      precio: 10,
      id: 4
    },
    {
      nombre: 'Producto 5',
      precio: 20,
      id: 5
    },
    {
      nombre: 'Producto 6',
      precio: 30,
      id: 6
    }
  ]
  saludar() {
    alert('Hola a todos')
  }
  incrementar() {
    this.contador = this.contador + 1
  }
  mostrarPorConsola() {
    console.log('Contador vale: ' + this.contador)
  }
}
