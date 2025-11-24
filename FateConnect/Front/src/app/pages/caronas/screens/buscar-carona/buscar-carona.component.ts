import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CaronaCardComponent } from '../../components/carona-card/carona-card.component';
import { CaronaFilterComponent } from "../../components/carona-filter/carona-filter.component";
import { Carona } from '../../models/carona.model';
import { FiltroCarona } from '../../models/filtro.model';
import { CaronaService } from '../../services/carona.service';

@Component({
  selector: 'app-buscar-carona',
  imports: [CommonModule, CaronaCardComponent, CaronaFilterComponent],
  templateUrl: './buscar-carona.component.html',
  styleUrl: './buscar-carona.component.scss'
})
export class BuscarCaronaComponent {
  private caronaService = inject(CaronaService);

  listaCaronas: Carona[] = [];

  ngOnInit(): void {
    this.buscarCaronas();
  }

  buscarCaronas(filtros?: FiltroCarona) {
    this.caronaService.listarCaronas(filtros).subscribe({
      next: (dadosApi) => {
        this.listaCaronas = dadosApi;
      },
      error: (erro) => {
        console.error('Erro ao buscar caronas:', erro);
      }
    });
  }
}
