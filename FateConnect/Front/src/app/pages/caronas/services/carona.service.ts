import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Carona } from '../models/carona.model';
import { FiltroCarona } from '../models/filtro.model';

@Injectable({
  providedIn: 'root'
})
export class CaronaService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/caronas`;

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

  excluirCarona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
