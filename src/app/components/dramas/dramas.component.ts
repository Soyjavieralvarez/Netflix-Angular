import { Component } from '@angular/core';

@Component({
  selector: 'app-dramas',
  templateUrl: './dramas.component.html',
  styleUrls: ['./dramas.component.scss']
})
export class DramasComponent {
  public dramasFilms = [
    {
      title:"1917",
      img:"../../../assets/images/Drama/1917.webp",
    },
    {
      title:"Arrival",
      img:"../../../assets/images/Drama/arrival.webp",
    },
    {
      title:"El Club de la Lucha",
      img:"../../../assets/images/Drama/clublucha.webp",
    },
    {
      title:"Corazones de acero",
      img:"../../../assets/images/Drama/corazones.webp",
    },
    {
      title:"El culpable",
      img:"../../../assets/images/Drama/culpable.jpg",
    },
    {
      title:"La milla verde",
      img:"../../../assets/images/Drama/millaverde.webp",
    },
    {
      title:"Naufrago",
      img:"../../../assets/images/Drama/naufrago.webp",
    },
    {
      title:"No es país para viejos",
      img:"../../../assets/images/Drama/noespais.webp",
    },
    {
      title:"Salvar al soldado Ryan",
      img:"../../../assets/images/Drama/salvaralsoldado.webp",
    },
    {
      title:"Scarface",
      img:"../../../assets/images/Drama/scarface.webp",
    },
    {
      title:"La lista de Schindler",
      img:"../../../assets/images/Drama/schindler.webp",
    },
    {
      title:"La Sombra del Diablo",
      img:"../../../assets/images/Drama/sombradiablo.webp",
    },
    {
      title:"El único superviviento",
      img:"../../../assets/images/Drama/unicosuperviviente.webp",
    },
  ]
}
