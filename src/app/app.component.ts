import { IFilm } from './models/ifilm';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

    public comedyFilms: IFilm [] = [

      {
        title:"Casi 300",
        img:"../../../assets/images/Comedia/casi300.webp",
      },
      {
        title:"Los caza fantasmas",
        img:"../../../assets/images/Comedia/cazafantasmas.webp",
      },
      {
        title:"El dictador",
        img:"../../../assets/images/Comedia/dictador.webp",
      },
      {
        title:"Erase Hollywood",
        img:"../../../assets/images/Comedia/erasehollywood.webp",
      },
      {
        title:"Family Guy",
        img:"../../../assets/images/Comedia/familyguy.webp",
      },
      {
        title:"Juerga",
        img:"../../../assets/images/Comedia/juerga.webp",
      },
      {
        title:"La Terminal",
        img:"../../../assets/images/Comedia/laterminal.webp",
      },
      {
        title:"Los padres de ella",
        img:"../../../assets/images/Comedia/padresella.webp",
      },
      {
        title:"Regreso al futuro",
        img:"../../../assets/images/Comedia/regresofuturo.webp",
      },
      {
        title:"Rick and Morty",
        img:"../../../assets/images/Comedia/rickandmorty.webp",
      },
      {
        title:"Scary Movie 3",
        img:"../../../assets/images/Comedia/scarymovie3.webp",
      },
      {
        title:"Ted 2",
        img:"../../../assets/images/Comedia/ted2.webp",
      },

    ]

    public dramasFilms: IFilm[] = [
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

    public scifiFilms: IFilm[] = [
      {
        title:"El 6º día",
        img:"../../../assets/images/Sci-fi/6dia.webp",
      },
      {
        title:"12 monos",
        img:"../../../assets/images/Sci-fi/12monos.webp",
      },
      {
        title:"After Earth",
        img:"../../../assets/images/Sci-fi/afterearth.webp"
      },
      {
        title:"The Cloverfield Paradox",
        img:"../../../assets/images/Sci-fi/colverparadox.jpg",
      },
      {
        title:"Core",
        img:"../../../assets/images/Sci-fi/core.webp",
      },
      {
        title:"Depp Impact",
        img:"../../../assets/images/Sci-fi/deepimpact.webp",
      },
      {
        title:"Doom",
        img:"../../../assets/images/Sci-fi/doom.webp",
      },
      {
        title:"Gits",
        img:"../../../assets/images/Sci-fi/gits.webp",
      },
      {
        title:"Jumper",
        img:"../../../assets/images/Sci-fi/jumper.webp",
      },
      {
        title:"Passengers",
        img:"../../../assets/images/Sci-fi/passengers.webp",
      },
      {
        title:"Star Trek",
        img:"../../../assets/images/Sci-fi/startrek.webp",
      },
      {
        title:"Transformers",
        img:"../../../assets/images/Sci-fi/transformers.webp",
      },
      {
        title:"Watchmen",
        img:"../../../assets/images/Sci-fi/watchmen.webp",
      },
    ]
  }


