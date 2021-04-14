import { Component, OnInit } from '@angular/core';
import { Docente } from '../models/docente';
import { DocentesService } from '../services/docentes.service';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent implements OnInit {
  docente : Docente;
  constructor(private service: DocentesService) { }

  ngOnInit(): void {
    this.docente=new Docente();
  }

  guardar(){
    this.service.post(this.docente).subscribe(resultado=>{
      if(resultado!=null){
        this.docente=resultado;
        alert("Docente guardado");
      }
    });
  }

}
