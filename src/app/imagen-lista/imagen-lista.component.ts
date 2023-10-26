import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './imagen-lista.component.html',
  styleUrls: ['./imagen-lista.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[] = []; 

  ngOnInit() {
    this.images = [
      {
        url: 'https://i.ytimg.com/vi/98KESBmPoIc/maxresdefault.jpg',
        title: 'Mario Bros',
        description: 'Mario Bros es un icónico videojuego de plataformas desarrollado por Nintendo. En el juego, los jugadores controlan a Mario, un fontanero, mientras viaja por el Reino Champiñón para rescatar a la princesa Peach del malvado Bowser. Lanzado por primera vez en 1983, Mario Bros se ha convertido en una de las franquicias de videojuegos más queridas y reconocibles del mundo.'
      },
      {
        url: 'https://www.gran-turismo.com/images/c/i1NV9IVoZx3lNEE.jpg',
        title: 'Gran Turismo',
        description: 'Gran Turismo es una famosa serie de videojuegos de carreras desarrollada por Polyphony Digital. Con un enfoque en la simulación de conducción realista, los jugadores pueden competir en una variedad de automóviles y circuitos detallados. Desde su debut en 1997, Gran Turismo ha sido elogiado por su atención al detalle y se ha ganado un lugar destacado en el mundo de los juegos de carreras.'
      },
      {
        url: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/02/maxresdefault.jpg?fit=1500%2C844&quality=50&strip=all&ssl=1',
        title: 'counter strike',
        description: 'El juego consiste en dos equipos, los Terroristas y los Antiterroristas (T y CT, respectivamente), los cuales se enfrentan entre ellos en diferentes modos de juego. El modo más común es en el cual el bando Terrorista tienen que plantar y defender una bomba mientras los Antiterroristas defender las zonas de plante de la bomba y su posterior desactivación'
      },
      {
        url: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58',
        title: 'The Legend of Zelda: Breath of the Wild',
        description: 'The Legend of Zelda: Breath of the Wild es un juego de acción y aventuras desarrollado y publicado por Nintendo. Es parte de la icónica serie The Legend of Zelda. En este juego, los jugadores controlan a Link en un vasto mundo abierto lleno de misterios, criaturas y rompecabezas. Breath of the Wild se destaca por su libertad de exploración y su enfoque innovador en la jugabilidad.'
      },
      {
        url: 'https://news.xbox.com/en-us/wp-content/uploads/sites/2/2023/06/Hero-2784d8f14f86676e048b.jpg',
        title: 'Overwatch',
        description: 'Overwatch es un juego de disparos en primera persona multijugador desarrollado por Blizzard Entertainment. Los jugadores eligen entre una variedad de héroes, cada uno con habilidades únicas, para competir en equipos en varios modos de juego. Overwatch se destaca por su enfoque en el trabajo en equipo y la estrategia, y ha ganado popularidad por su jugabilidad dinámica y personajes carismáticos.'
      },
      {
        url: 'https://cdn2.unrealengine.com/26br-keyart-noshadow-1920x1080-3358aa3ee425.jpg',
        title: 'Fortnite',
        description: 'Fortnite es un juego de batalla real desarrollado por Epic Games. En este juego, 100 jugadores se lanzan en paracaídas en una isla y compiten para ser el último sobreviviente. Los jugadores pueden recolectar recursos, construir estructuras y enfrentarse en intensos combates. Fortnite ha ganado popularidad por su estilo artístico colorido, eventos en vivo emocionantes y constante actualización de contenido.'
      }
      
    ];
  }
}
