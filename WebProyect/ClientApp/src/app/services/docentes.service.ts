import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Docente } from '../models/docente';
import { environment } from '../../environments/environment';



const ruta = environment.ruta;
@Injectable({
  providedIn: 'root'
})
export class DocentesService {
  


  constructor(
    private http: HttpClient,
    private handleErrorService: HandleHttpErrorService
  ) {  }

  post(docente : Docente) : Observable<Docente> {
    return this.http.post<Docente>(ruta,docente).pipe(tap(
      _=>this.handleErrorService.log("Datos Registrados")
    ), catchError(this.handleErrorService.handleError<Docente>("Docente Registrado",null)) )

  }

  search(identificacion: String){
    return this.http.get<Docente>(ruta+"/"+identificacion).pipe(
      tap(()=>console.log("Buscado correctamente"))
    )
  }

  get():Observable<Docente[]>{
    return this.http.get<Docente[]>(ruta).pipe(
      tap(()=>console.log("Consultado correctamente"))
    )
  }

  delete(identificacion: String){
    return this.http.delete(ruta+"/"+identificacion).pipe(
      tap(()=>console.log("Eliminado correctamente"))
    )
  }

  modify(docente: Docente){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.put(ruta+"/people", docente, httpOptions).pipe(
      tap(()=>console.log("Modificado correctamente"))
    )
  }


}
