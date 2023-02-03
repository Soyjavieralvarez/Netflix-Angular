import { Component } from '@angular/core';

@Component({
  selector: 'app-heroine',
  templateUrl: './heroine.component.html',
  styleUrls: ['./heroine.component.scss']
})
export class HeroineComponent {
  public betterFilms = [
    {
      title:"La casa de Papel",
      img:"../../../assets/images/Top10/1-papel.webp",
    },
    {
      title:"Reina",
      img:"../../../assets/images/Top10/2-reina.webp",
    },
    {
      title:"Titantes",
      img:"../../../assets/images/Top10/3-titanes.webp",
    },
    {
      title:"Lost in Space",
      img:"../../../assets/images/Top10/4-lostinspace.webp",
    },
    {
      title:"Donde caben dos",
      img:"../../../assets/images/Top10/5-dondecaben.webp",
    },
    {
      title:"Aquí no hay quien viva",
      img:"../../../assets/images/Top10/6-aquinohay.webp",
    },
    {
      title:"Blacklist",
      img:"../../../assets/images/Top10/7-blacklist.webp",
    },
    {
      title:"Ricos y Mimados",
      img:"../../../assets/images/Top10/8-ricos.webp",
    },
    {
      title:"The Good Doctor",
      img:"../../../assets/images/Top10/10-gooddoctor.webp",
    }
  ]

  constructor() {
    console.log(this.betterFilms)
  }

}
