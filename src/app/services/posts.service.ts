import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//PASO 1:
//Definir como van a ser los datos que vengan de la API
//Estos siempre van a ser distintos y dependen de la documentacion de cada API
//Exportamos el Post ya que otros lugares de nuestra APP como otros servicios o componentes quizas necesiten saber como es el tipo de dato Post.
export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

@Injectable({
  providedIn: 'root'
})

/* las consultas HTTP deben hacerse dentro del servicio, por eso definiremos a API_URL como propiedad privada, esto limitara el acceso a la propiedad */
export class PostsService {
  private API_URL = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }
  getPosts () : Observable<Post[]>{
    return this.http.get<Post[]>(this.API_URL)
  }
  
}
