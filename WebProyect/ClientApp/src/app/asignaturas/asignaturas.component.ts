import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturas:any=[]
  constructor() { }

  ngOnInit(): void {
    this.asignaturas=[
      {codigo:"SS401", nombre:"Base de Datos", creditos:"3", horas:"6"},
      {codigo:"SS402", nombre:"Ingeniería de Software", creditos:"3", horas:"10"},
      {codigo:"SS403", nombre:"Ecuaciones Diferenciales", creditos:"3", horas:"6"}
    ]
  }

}
