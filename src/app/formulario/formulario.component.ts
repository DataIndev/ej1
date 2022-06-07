import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../Persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada = new EventEmitter<Persona>()

  inputNombre!: string
  inputApellido!: string

  agregarPersona(): void {
    let persona1 = new Persona(this.inputNombre, this.inputApellido)
    this.personaCreada.emit(persona1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
