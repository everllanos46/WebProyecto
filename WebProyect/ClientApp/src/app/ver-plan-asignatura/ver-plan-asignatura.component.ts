import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-plan-asignatura',
  templateUrl: './ver-plan-asignatura.component.html',
  styleUrls: ['./ver-plan-asignatura.component.css']
})
export class VerPlanAsignaturaComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  abrir(){
    this.router.navigateByUrl('/solicitud');
  }
  ngOnInit(): void {
  }

}
