import { Component } from '@angular/core';
//FormsModule es un modulo que nos los provee angular para poder manejar formularios
import { FormsModule } from '@angular/forms';

//La interfaz nos permite definir un schema para nuestro objeto
interface Message {
  author: string,
  id: number, 
  text: string
}

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {
  //Estoy tipando explicitamente que mi estado de messages es un array donde cada elemento es un objeto que cumple con la interfaz Message
  messages : Message[] = [
    {
      author: 'John Doe',
      text: 'Hello world',
      id: 1
    },
    {
      author: 'Mary Doe',
      text: 'Hi there',
      id: 2
    },
    {
      author: 'John Doe',
      text: 'Hi',
      id: 3
    }
  ]
  enviarMensaje (){
    console.log("Mensaje enviado")
    console.log(this.estado_formulario)
    this.messages.push({
      author: this.estado_formulario.author,
      text: this.estado_formulario.text,
      id: this.messages.length + 1
    })
    this.estado_formulario.author = ''
    this.estado_formulario.text = ''
  }
  estado_formulario = {
    author: '',
    text: ''
  }
}

/* 
typescript tiene inferencia de dato, esto significa que puede tiparse sin necesidad de ser explicitos:
EJ
let nombre = 'pepe' //Typescript inferira que el type de nuestra variable es string, NO FUE NECESARIO ACLARARLO
*/
//let nombre : string = 'pepe'
//nombre = 60