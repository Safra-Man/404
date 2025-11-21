import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CaronaCardComponent } from '../../../../components/carona-card/carona-card.component';
import { Carona } from '../../models/carona.model';
import { CaronaService } from '../../services/carona.service';

@Component({
  selector: 'app-buscar-carona',
  imports: [CommonModule, CaronaCardComponent],
  templateUrl: './buscar-carona.component.html',
  styleUrl: './buscar-carona.component.scss'
})
export class BuscarCaronaComponent {
  private caronaService = inject(CaronaService);

  listaCaronas: Carona[] = [];

  ngOnInit(): void {
    this.buscarDados();
  }

  buscarDados() {
    this.caronaService.listarCaronas().subscribe({
      next: (dadosApi) => {
        console.log(dadosApi);
        this.listaCaronas = dadosApi;
      },
      error: (erro) => {
        console.error('Erro ao buscar caronas:', erro);
      }
    });
  }
}
