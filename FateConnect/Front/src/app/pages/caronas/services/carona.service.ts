import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Carona } from '../models/carona.model';
import { FiltroCarona } from '../models/filtro.model';

@Injectable({
  providedIn: 'root'
})
export class CaronaService {
  private http = inject(HttpClient);
  private apiUrl = "http://191.252.210.114:5000/api/Caronas";


  listarCaronas(filtros?: FiltroCarona) : Observable<Carona[]>{
    let params = new HttpParams();

    if (filtros) {
      if (filtros.destino) {
        params = params.set('Destino', filtros.destino);
      }

      if (filtros.data) {
        params = params.set('DataPartida', filtros.data);
      }

      if (filtros.hora) {
        params = params.set('HoraPartida', filtros.hora);
      }

      if (filtros.tipoCarona) {
        params = params.set('TipoCarona', filtros.tipoCarona);
      }
    }

    return this.http.get<Carona[]>(this.apiUrl, { params });
  }
}
