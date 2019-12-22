export interface IPersona {
    _id: String;
    nombre: String;
    apellidos: String;
    edad: Number;
    color: String;
    dob: Date;
    gender: String;
    notas: String;
}

export class Persona implements IPersona {
    nombre: String;
    apellidos: String;
    edad: Number;
    _id: String;
    color: String;
    dob: Date;
    gender: String;
    notas: String;

    constructor(persona: IPersona)
    constructor(persona: any){
        this.nombre = (persona && persona.nombre) || null;
        this.apellidos = (persona && persona.apellidos) || null;
        this.edad = (persona && persona.edad) || null;
        this._id = (persona && persona._id) || null;
        this.color = (persona && persona.color) || null;
        this.dob = (persona && persona.dob) || null;
        this.gender = (persona && persona.gender) || null;
        this.notas = (persona && persona.notas) || null;

    }
 }