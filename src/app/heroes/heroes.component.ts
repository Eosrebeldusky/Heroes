import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = []; //property declaration


  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes=>this.heroes = heroes) //suscribing to observable
  }

  ngOnInit(): void {
    this.getHeroes() //calling getheroes
  }
  
}
