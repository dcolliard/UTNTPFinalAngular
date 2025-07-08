import { Routes } from '@angular/router';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';
import { ContactForm } from './contact-form/contact-form';
import { NotFound } from './not-found/not-found';

//Queremos hacer una ruta para una mensajeria tipo whatsapp o chatbot
//Ejemplo: /chat
export const routes: Routes = [
     { 
        path: '', 
        component: Products, 
        pathMatch: 'full' 
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
        path: 'contact', //Cualquier ruta que no se haya definido arriba
        component: ContactForm
    },
    {
        path: '**', //Cualquier ruta que no se haya definido arriba
        component: NotFound
    }
];
