import { Component, OnInit } from '@angular/core';
import { Persona } from '../shared/persona';
import { PersonaService } from '../shared/persona.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  dataSource = new MatTableDataSource<Persona>([]);
  displayedColumns: string[] = ['nombre', 'apellidos', '_id', 'action'];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.dataSource.data = this.personaService.personas;
  }

  deletePersona(index, e) {
    if (window.confirm('¿Estás seguro?')) {
      this.personaService.DeletePersona(index);

      this.dataSource.data = this.personaService.personas;
    }
  }
}
