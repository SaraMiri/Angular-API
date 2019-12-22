import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../shared/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-add',
  templateUrl: './persona-add.component.html',
  styleUrls: ['./persona-add.component.css']
})
export class PersonaAddComponent implements OnInit {
  _id: String;
  nombre: String;
  apellidos: String;
  edad: Number;
  color: String;
  dob: Date;
  gender: String;
  notas: String;

  constructor(
    private router: Router,
    private personaApi: PersonaService
  ) { }

  ngOnInit() {
    this._id = null;
    this.nombre = null;
    this.apellidos = null;
    this.edad = null;
    this.color = null;
    this.dob = null;
    this.gender = null;
    this.notas = null;
  }

  submitPersonaForm() {
    this.personaApi.AddPersona(this._id, this.nombre, this.apellidos, this.edad, this.color, this.dob, this.gender, this.notas);
    this.router.navigateByUrl('')

  }

}
