import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,
              private http: HttpClient,   ) { }
    private heroesUrl = 'api/heroes';  // URL to web api              

    /* with rxjs
  getHeroes(): Observable<Hero[]> {
    const heroes =of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }
*/

  getHeroes(): Observable<Hero[]> { 
    return this.http.get<Hero[]>(this.heroesUrl)
  }
  
  private log(message:string){
    this.messageService.add(`Hero Service ${message}`)
  }

  getHero(id:number): Observable<Hero>{
    const hero =HEROES.find(h => h.id === id )!;
    this.messageService.add(`HeroService:fetched hero id=${id}`)
    return of(hero);
  }


}
