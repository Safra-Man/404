import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faClock,
  faPenToSquare,
  faTrash,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { Carona } from '../../models/carona.model';
import { ConfirmDialogComponent } from '../../../../shared/ui/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-carona-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatDialogModule, FontAwesomeModule],
  templateUrl: './carona-card.component.html',
  styleUrl: './carona-card.component.scss'
})
export class CaronaCardComponent {
  private dialog = inject(MatDialog);
  @Input({ required: true }) carona!: Carona;
  @Output() excluir = new EventEmitter<Carona>();

  iconeCalendario = faCalendar;
  iconeRelogio = faClock;
  iconeUserGroup = faUserGroup;
  iconeEditar = faPenToSquare;
  iconeDeletar = faTrash;

  getCorTipoCarona(tipo: string): string {
    return `tag ${tipo == "Filantropica" ? "verde" : "marrom"}`;
  }

  getTextoTipoCaronaCorrigido(tipo: string): string {
    return tipo == "Filantropica" ? "Filantrópica" : "Igualitária";
  }

  confirmarExclusao(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmar Exclusão',
        message: `Tem certeza que deseja excluir a carona para <strong>${this.carona.destino}</strong>?`,
        cancelText: 'Cancelar',
        confirmText: 'Excluir',
      }
    });

    dialogRef.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.excluir.emit(this.carona);
      }
    });
  }
}
