import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Hero } from './hero';
import { HEROES } from './mock-hero'; 

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})


export class HeroService {
  //Lets Add some Advertisement Heroes.
  ADV_HEROES: Hero[]; 

  constructor(private messageService: MessageService ) { 
  	this.ADV_HEROES = this.loadAdvHeroes();
  }

  pauseComp() : void{
    var now = new Date().getTime();
    while(new Date().getTime() < now + 100){ /* do nothing */ } 
  }

  getHeroes(): Observable<Hero[]> {
  	//this.pauseComp();
    console.log('getHeroes: Pushing the heros');
    this.messageService.add('HeroService: fetched heros');
  	return of(HEROES.concat(this.ADV_HEROES));
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
