import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'; //importo el servicio
import { Hero } from '../hero'; //importo la interfaz

@Component({
  selector: 'app-rancio',
  templateUrl: './rancio.component.html',
  styleUrls: ['./rancio.component.css']
})
export class RancioComponent implements OnInit {
  heroes: Hero[] = [] 

  constructor(private heroServices: HeroService) { }

  ngOnInit(): void {
    this.getHero()
  }
    getHero(): void {
      this.heroServices.getHeroes().subscribe(hero=> this.heroes = hero)
    }   

}


