import { Itop } from './../../models/itop';
import { Component } from '@angular/core';


@Component({
  selector: 'app-heroine',
  templateUrl: './heroine.component.html',
  styleUrls: ['./heroine.component.scss']
})
export class HeroineComponent {
  public betterFilms: Itop[] = [
    {
      top:1,
      img:"../../../assets/images/Top10/1-papel.webp",
    },
    {
      top:2,
      img:"../../../assets/images/Top10/2-reina.webp",
    },
    {
      top:3,
      img:"../../../assets/images/Top10/3-titanes.webp",
    },
    {
      top:4,
      img:"../../../assets/images/Top10/4-lostinspace.webp",
    },
    {
      top:5,
      img:"../../../assets/images/Top10/5-dondecaben.webp",
    },
    {
      top:6,
      img:"../../../assets/images/Top10/6-aquinohay.webp",
    },
    {
      top:7,
      img:"../../../assets/images/Top10/7-blacklist.webp",
    },
    {
      top:8,
      img:"../../../assets/images/Top10/8-ricos.webp",
    },
    {
      top:9,
      img:"../../../assets/images/Top10/10-gooddoctor.webp",
    },
    {
      top:10,
      img:"../../../assets/images/Top10/9-poder.webp",
    },
  ]

  

}
