import { Component } from '@angular/core';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.scss']
})
export class ComedyComponent {
  public comedyFilms = [
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
}
