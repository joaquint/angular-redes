import { Injectable } from '@angular/core';
import { Persona } from './modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getPersonas(): Array<Persona> {
    if (localStorage.getItem('personas') === null) {
      return new Array<Persona>();
    }
    return JSON.parse(localStorage.getItem('personas'));
  }

  public addPersona(p: Persona): Array<Persona> {
    let personas = this.getPersonas();
    personas.push(p);
    localStorage.setItem('personas', JSON.stringify(personas));
    return personas;
  }

  public deletePersona(p: Persona): Array<Persona> {
    let personas = this.getPersonas();
    personas = personas.filter(obj => p.id !== obj.id);
    localStorage.setItem('personas', JSON.stringify(personas));
    return personas;
  }

  public modificaPersona(p: Persona): Array<Persona> {
    let personas = this.getPersonas();
    personas = personas.filter(obj => p.id !== obj.id);
    personas.push(p);
    localStorage.setItem('personas', JSON.stringify(personas));
    return personas;
  }

}
