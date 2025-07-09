import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Message {
  name: string,
  email: string,
  id: number,
  text: string
}

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
    enviarMensaje (){
    alert("Mensaje enviado")
    
  }
    estado_formulario = {
    name: '',
    email: '',
    text: ''
  }

}
