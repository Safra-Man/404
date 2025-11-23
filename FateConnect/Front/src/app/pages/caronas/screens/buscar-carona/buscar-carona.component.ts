import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CaronaCardComponent } from '../../components/carona-card/carona-card.component';
import { Carona } from '../../models/carona.model';
import { CaronaService } from '../../services/carona.service';
import { finalize } from 'rxjs/operators';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-buscar-carona',
  imports: [CommonModule, CaronaCardComponent, MatProgressSpinnerModule],
  templateUrl: './buscar-carona.component.html',
  styleUrl: './buscar-carona.component.scss',
})
export class BuscarCaronaComponent {
  private caronaService = inject(CaronaService);

  listaCaronas: Carona[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.buscarDados();
  }

  buscarDados() {
    this.isLoading = true;
    this.caronaService
      .listarCaronas()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (dadosApi) => {
          console.log(dadosApi);
          this.listaCaronas = dadosApi;
        },
        error: (erro) => {
          console.error('Erro ao buscar caronas:', erro);
        },
      });
  }
}
