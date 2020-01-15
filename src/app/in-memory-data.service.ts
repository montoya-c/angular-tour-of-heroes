import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 10, name: 'Audre Lorde', wisdom: "Your silence will not protect you." },
      { id: 11, name: 'Bell Hooks', wisdom: "Feminism is for everybody." },
      { id: 12, name: 'Gloria E. Anzaldúa', wisdom: "To survive the Borderlands you must live sin fronteras be a crossroads." },
      {id: 13, name: 'Cherríe L. Moraga', wisdom: 'The revolution starts at home.'},
      {id: 14, name: 'Alice Walker', wisdom: 'The most common way people give up their power is by thinking they don’t have any.'},
      {id: 15, name: 'Chandra Mohanty', wisdom: 'Sisterhood cannot be assumed on the basis of gender; it must be forged in concrete historical and political practice and analysis.'},
      {id: 16, name: 'Maria Felix', wisdom: 'Soy mas cabrona que bonita, y mira que soy muy bonita.'},
      {id: 17, name: 'Assata Shakur', wisdom: 'I have advocated and I still advocate revolutionary change.'},
      {id: 18, name: 'Toni Morrison', wisdom: 'You wanna fly, you got to give up the shit that weighs you down.'},
      {id: 19, name: 'James Baldwin', wisdom: 'Love takes off the masks we fear we cannot live without and know we cannot live within.'},
      {id: 20, name: 'Sor Juana Inés de la Cruz', wisdom: 'Hombres necios que acusáis a la mujer sin razón sin ver que sois la ocasión de lo mismo que culpáis.'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (10).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 10;
  }
}
