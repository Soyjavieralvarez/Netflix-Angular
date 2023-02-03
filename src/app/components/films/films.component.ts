import { Component } from '@angular/core';
import { IFilm } from './../../models/ifilm'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  public accionFilms: IFilm[] = [
    {
      title:"El ejercito de los muertos",
      img:"../../../assets/images/Accion/ejercitomuertos.jpg"
    },
    {
      title:"El Protector",
      img:"../../../assets/images/Accion/elprotector.webp"
    },
    {
      title:"Equalizer 2",
      img:"../../../assets/images/Accion/equalizer2.webp",
    },
    {
      title:"Heat",
      img:"../../../assets/images/Accion/heat.webp",
    },
    {
      title:"Jack & Reacher",
      img:"../../../assets/images/Accion/jackreacher.webp",
    },
    {
      title:"Jhon Wikc 2",
      img:"../../../assets/images/Accion/johnwick2.webp",
    },
    {
      title:"Kill Bill 2",
      img:"../../../assets/images/Accion/killbill2.webp",
    },
    {
      title:"Misión Imposible",
      img:"../../../assets/images/Accion/misionimposiblenacion.webp",
    },
    {
      title:"El Renacido",
      img:"../../../assets/images/Accion/renacido.webp",
    },
    {
      title:"Terminator 2",
      img:"../../../assets/images/Accion/terminator2.webp",
    },
    {
      title:"World War Z",
      img:"../../../assets/images/Accion/worldwarz.webp",
    },
  ]
}
