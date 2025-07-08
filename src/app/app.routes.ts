import { Routes } from '@angular/router';
import { Chat } from './chat/chat';
import { Home } from './home/home';
import { Posts } from './posts/posts';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';

//Queremos hacer una ruta para una mensajeria tipo whatsapp o chatbot
//Ejemplo: /chat
export const routes: Routes = [
    {
        path: 'chat', //Direccion de la ruta
        component: Chat //Componente que se va a renderizar cuando el cliente entre a esta ruta
    },
    {
        path: 'home', //Direccion de la ruta
        component: Home //Componente que se va a renderizar cuando el cliente entre a esta ruta
    },
    {
        path: 'posts', //Direccion de la ruta
        component: Posts //Componente que se va a renderizar cuando el cliente entre a esta ruta
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'products/:product_id',
        component: ProductDetail
    },
    {
        path: '**', //Cualquier ruta que no se haya definido arriba
        component: Home
    }
];
