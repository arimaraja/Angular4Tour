import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

/* 
 We will consume this as service 
import { HEROES } from '../mock-hero'; 
*/
import { HeroService } from '../hero.service';

import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  notes = "Welcome!!";

/*
  // Lets consume from service.
  heroes = HEROES;
*/

  // heroes of type array simple declaration.
  heroes : Hero[];

// declaring object of type Hero
  selectedHero: Hero;

  onSelect(hero: Hero ): void {
  	this.selectedHero = hero;

    //log the heros selected.
    this.messageService.add('HeroService: '+ hero.name );
  }

  constructor( private heroService: HeroService, private messageService:MessageService) 
  {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes );
  }

}
