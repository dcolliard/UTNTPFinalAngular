
import { Component, inject } from '@angular/core';
import { Post, PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts {
  posts : Post[] = [] //Creamos un estado donde guardamos los posteos
  loading : boolean = true //Marcamos que nuestro componente inicia cargando porque aun no se cargaron los posteos (aun no se resolvio la consulta)
  error : string | null = null
  private postService = inject(PostsService) //Esta funcion nos permite inyectar un servicio en nuestro componente
  ngOnInit (){ //Cuando se monta el componente
    let observable = this.postService.getPosts()
    observable.subscribe(
      {
        next: (posts) => {
          //Cuando se cargen
          this.posts = posts //Los guardamos en el estado
          this.loading = false
        },
        error: (error) => {
          console.error("el observable fallo en ejecucion", error)
          this.error = 'Fallo critico al obtener productos'
          this.loading = false
        }
      }
    )
  }
}
