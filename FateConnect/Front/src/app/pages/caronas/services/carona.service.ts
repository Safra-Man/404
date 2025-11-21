import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Carona } from '../models/carona.model';

@Injectable({
  providedIn: 'root'
})
export class CaronaService {
  private http = inject(HttpClient);

  private apiUrl = "http://191.252.210.114:5000/api/Caronas";

  listarCaronas() : Observable<Carona[]>{
    return this.http.get<Carona[]>(this.apiUrl);
  }

}
