import { Component, OnInit } from '@angular/core';
import { Peliculas } from '../interfaces/peliculas';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  peliculas:Peliculas[]= [
    {"titulo":"Star Wars Episodio I", "director":"George Lucas", "imagen":"https://m.media-amazon.com/images/I/51kmNBe80yL._SY445_.jpg"},
    {"titulo":"Star Wars Episodio II", "director":"George Lucas", "imagen":"https://m.media-amazon.com/images/I/71xw-GMt7eL._SY445_.jpg"},
    {"titulo":"Star Wars Episodio III", "director":"George Lucas", "imagen":"https://www.fabulantes.com/wp-content/uploads/2015/12/star-wars-iii.jpg"},
    {"titulo":"Star Wars Episodio IV", "director":"George Lucas", "imagen":"https://comoacaba.com/wp-content/uploads/2019/03/4hOUzmButYUeON0prG3RpbqS7ag.jpg"},
    {"titulo":"Star Wars Episodio V", "director":"George Lucas", "imagen":"https://www.milcomics.com/954613-thickbox_default/star-wars-episodio-v-el-imperio-contraataca-hc-tomo-recopilatorio.jpg"},
    {"titulo":"Star Wars Episodio VI", "director":"George Lucas", "imagen":"http://observandocine.com/wp-content/uploads/2015/12/star_wars_vi___return_of_the_jedi___movie_poster_by_nei1b-d5t3b8d.jpg"},
    {"titulo":"Star Wars Episodio VII", "director":"George Lucas", "imagen":"https://cloud10.todocoleccion.online/cine-posters-carteles/tc/2016/07/13/20/57998112.jpg"},
    {"titulo":"Star Wars Episodio VIII", "director":"George Lucas", "imagen":"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/cd5032ae57ae66e6b89ea3b3d9391a8f5b2a1e29fc6cd84ad5f68a4e09edb42d._RI_V_TTW_.jpg"},
    {"titulo":"Star Wars Episodio IX", "director":"George Lucas", "imagen":"https://1.bp.blogspot.com/-oi_SJ6OZFVs/Xf5uJ8RJ8wI/AAAAAAAAPm4/F0ULHBC24UsWkMtM41KQ8me28tMhDkvFACLcBGAsYHQ/s1600/cartel.jpeg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
