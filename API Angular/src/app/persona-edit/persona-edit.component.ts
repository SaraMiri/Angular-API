import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../shared/persona.service';
import { Persona } from '../shared/persona';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {
  id: string;
  _id: String;
  persona: Persona;
  nombre: String = null;
  apellidos: String = null;
  edad: Number = null;
  color: String = null;
  dob: Date = null;
  gender: String = null;
  notas: String;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    this.persona = new Persona(null);
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.persona = this.personaService.GetPersona(this.id);
    console.log('persona: ', this.persona);
    this._id = this.persona._id;
    this.nombre = this.persona.nombre;
    this.apellidos = this.persona.apellidos;
    this.edad = this.persona.edad;
    this.color = this.persona.color;
    this.dob = this.persona.dob;
    this.gender = this.persona.gender;
    this.notas = this.persona.notas;
  }

  submitPersonaForm() {
    this.personaService.UpdatePersona(this.id, this.persona);
    this.router.navigateByUrl('/persona-list')
  }

}
