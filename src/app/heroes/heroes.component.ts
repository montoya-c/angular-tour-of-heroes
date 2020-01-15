import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  //function that makes HTTP requests to a remote server as a real data service would.
  getHeroes(): void {
    // heroService.getHeroes() is a synchronous signature, which implies that the HeroService can fetch heroes synchronously but getHeroes() cannot return immediately with hero data, and the browser will not block while the service waits so must have an asynchronous signature of some kind to wait for the server to respond, 
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  //waits for the Observable to emit the array of heroes—which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.



  add(name: string, wisdom: string): void {
    name = name.trim();
    if (!name) { return; }
    wisdom = wisdom.trim();
    if (!wisdom) { return; }
    this.heroService.addHero({ name, wisdom }  as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  //If you neglect to subscribe(), the service will not send the delete request to the server. As a rule, an Observable does nothing until something subscribes.

}

