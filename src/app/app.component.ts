import { Component, } from '@angular/core';
import { Persona } from './Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title= "Listado de Personas"


  listaPersonas: Persona[] = []


  personaAgregada(persona: Persona){
    this.listaPersonas.push(persona)
  }



}
