import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-hero'; 

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  //Lets Add some Advertisement Heroes.
  ADV_HEROES: Hero[]; 

  constructor() { 
  	this.ADV_HEROES = this.loadAdvHeroes();
  }

  getHeroes(): Hero[] {
  	return HEROES.concat(this.ADV_HEROES);
  }

  loadAdvHeroes():Hero[] {
  	return [
  		{ id: 21, name: 'Miss.Victoria' },
  		{ id: 22, name: 'Prof.Penjamin' },
  		{ id: 23, name: 'Ganesh Mastro' },
  		{ id: 24, name: 'Senthil Prof' },
 	];
  }
}
