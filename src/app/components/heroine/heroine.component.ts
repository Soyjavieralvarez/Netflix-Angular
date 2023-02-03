import { Component } from '@angular/core';
import { IFilm } from './../../models/ifilm'

@Component({
  selector: 'app-heroine',
  templateUrl: './heroine.component.html',
  styleUrls: ['./heroine.component.scss']
})
export class HeroineComponent {
  public betterFilms: IFilm[] = [
    {
      top:1,
      title:"La casa de Papel",
      img:"../../../assets/images/Top10/1-papel.webp",
    },
    {
      top:2,
      title:"Reina",
      img:"../../../assets/images/Top10/2-reina.webp",
    },
    {
      top:3,
      title:"Titantes",
      img:"../../../assets/images/Top10/3-titanes.webp",
    },
    {
      top:4,
      title:"Lost in Space",
      img:"../../../assets/images/Top10/4-lostinspace.webp",
    },
    {
      top:5,
      title:"Donde caben dos",
      img:"../../../assets/images/Top10/5-dondecaben.webp",
    },
    {
      top:6,
      title:"Aquí no hay quien viva",
      img:"../../../assets/images/Top10/6-aquinohay.webp",
    },
    {
      top:7,
      title:"Blacklist",
      img:"../../../assets/images/Top10/7-blacklist.webp",
    },
    {
      top:8,
      title:"Ricos y Mimados",
      img:"../../../assets/images/Top10/8-ricos.webp",
    },
    {
      top:9,
      title:"The Good Doctor",
      img:"../../../assets/images/Top10/10-gooddoctor.webp",
    }
  ]

  

}
