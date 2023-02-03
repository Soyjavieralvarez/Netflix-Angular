import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public navFilms = [
    {
      writer:"Escrita y dirigida por Damien Challeze",
      title:"Babylon",
      img:"../../../assets/images/Babylon/babylon.jpg",
    }
  ]
}
