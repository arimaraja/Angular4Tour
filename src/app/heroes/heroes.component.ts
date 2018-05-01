import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  notes = "Welcome!!";

  heroes = HEROES;

// declaring object of type Hero
  selectedHero: Hero;

  onSelect(hero: Hero ): void {
  	this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit() {
  }

}
