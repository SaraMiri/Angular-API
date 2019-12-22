import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Array<Persona>;

  constructor() {
    this.personas = [];
   }

  // Añadir persona
  AddPersona(id, nombre, apellidos, edad, color, dob, gender, notas) {
    let persona = new Persona({_id: id, nombre, apellidos, edad, color,  dob, gender, notas});
    this.personas.push(persona);
  }

  // Get persona
  GetPersona(id): Persona {
    return this.personas[id];
  }

  // Actualizar persona
  UpdatePersona(id, persona: Persona) {
    this.personas[id]=persona;
  }

  // Borrar persona
  DeletePersona(id) {
    
    this.personas.splice(id,1);
    
  }
}
