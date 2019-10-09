import { Component, OnInit } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes : Hero[];

  /*
  dead code
  selectedHero: Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }*/

  //private Hero service constructor
  constructor(private heroService: HeroService){

  }

  //hero retrival done with the getHeros method
  getHeroes():void{
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
