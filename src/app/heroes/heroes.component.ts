import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { MessageService } from '../message.service';

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

  auditMessage(hero: Hero):void {
    //log the heros selected.
    this.messageService.add('HeroService: '+ hero.name );    
  }

  constructor( private heroService: HeroService, private messageService:MessageService) 
  {}

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
      if (!name) { return; }
    
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
    });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes );
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
