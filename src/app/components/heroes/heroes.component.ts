import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[] = [];

  constructor( private _heroesServices:HeroesService ) {
    console.log("constructor");
   }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();

    console.log(this.heroes);
  }

}
