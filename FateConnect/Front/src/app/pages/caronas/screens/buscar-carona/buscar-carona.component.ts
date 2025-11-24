import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { finalize } from 'rxjs/operators';
import { CaronaCardComponent } from '../../components/carona-card/carona-card.component';
import { CaronaFilterComponent } from "../../components/carona-filter/carona-filter.component";
import { Carona } from '../../models/carona.model';
import { FiltroCarona } from '../../models/filtro.model';
import { CaronaService } from '../../services/carona.service';

@Component({
  selector: 'app-buscar-carona',
  imports: [CommonModule, CaronaCardComponent, MatProgressSpinnerModule, MatSnackBarModule, CaronaFilterComponent],
  templateUrl: './buscar-carona.component.html',
  styleUrl: './buscar-carona.component.scss',
})
export class BuscarCaronaComponent {
  private caronaService = inject(CaronaService);
  private snackBar = inject(MatSnackBar);

  listaCaronas: Carona[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.buscarCaronas();
  }

  buscarCaronas(filtros?: FiltroCarona) {
    this.isLoading = true;
    this.caronaService
      .listarCaronas(filtros)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (dadosApi) => {
          this.listaCaronas = dadosApi;
        },
        error: (erro) => {
          console.error('Erro ao buscar caronas:', erro);
        },
      });
  }

  onExcluir(carona: Carona) {
    this.isLoading = true;
    this.caronaService
      .excluirCarona(carona.id)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => {
          this.listaCaronas = this.listaCaronas.filter((c) => c.id !== carona.id);
          this.snackBar.open('Carona excluída com sucesso.', 'OK', {
            duration: 3000,
            verticalPosition: 'top',
            panelClass: ['snackbar-success'],
          });
        },
        error: () => {
          this.snackBar.open('Erro ao excluir a carona. Tente novamente.', 'Fechar', {
            duration: 4000,
            verticalPosition: 'top',
            panelClass: ['snackbar-error'],
          });
        },
      });
  }
}
