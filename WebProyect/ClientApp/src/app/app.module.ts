
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DocentesComponent } from './docentes/docentes.component';
import { VerPlanAsignaturaComponent } from './ver-plan-asignatura/ver-plan-asignatura.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { RegistrarDocenteComponent } from './registrar-docente/registrar-docente.component';
import { RegistroAsignaturaComponent } from './registro-asignatura/registro-asignatura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalComponent } from './@base/modal/modal.component';
import { VerDocenteComponent } from './ver-docente/ver-docente.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    MatSliderModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ModalComponent,
    VerDocenteComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
