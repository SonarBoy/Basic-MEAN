import { Component, OnInit } from '@angular/core';

import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
