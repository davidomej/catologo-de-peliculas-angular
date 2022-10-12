import { Component, Input, OnInit } from '@angular/core';
import { Peliculas } from '../interfaces/peliculas';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  @Input() pelicula:Peliculas|any;

  constructor() { }

  ngOnInit(): void {
  }

}
