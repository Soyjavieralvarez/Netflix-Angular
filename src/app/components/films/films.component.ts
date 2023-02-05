import { Component, Input } from '@angular/core';
import { IFilm } from './../../models/ifilm'

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  @Input() public films!: IFilm[];
  
}
