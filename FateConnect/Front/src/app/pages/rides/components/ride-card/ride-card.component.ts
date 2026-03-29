import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
import { Ride } from '../../models/ride.model';
import { rideTypeDisplayLabel, rideTypeTagClass } from '../../models/ride-type.model';
import { ConfirmDialogComponent } from '../../../../shared/ui/dialogs/confirm-dialog/confirm-dialog.component';
import { TypographyComponent } from '../../../../shared/ui/typography/typography';

@Component({
  selector: 'app-ride-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FontAwesomeModule,
    TypographyComponent,
  ],
  templateUrl: './ride-card.component.html',
  styleUrl: './ride-card.component.scss'
})
export class RideCardComponent {
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  readonly ride = input.required<Ride>();
  readonly edit = output<Ride>();
  readonly delete = output<Ride>();

  protected readonly calendarIcon = faCalendar;
  protected readonly clockIcon = faClock;
  protected readonly userGroupIcon = faUserGroup;
  protected readonly editIcon = faPenToSquare;
  protected readonly deleteIcon = faTrash;

  typeTagClass(value: string): string {
    return rideTypeTagClass(value);
  }

  typeDisplayLabel(value: string): string {
    return rideTypeDisplayLabel(value);
  }

  onEdit(): void {
    this.edit.emit(this.ride());
  }

  confirmDelete(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirmar Exclusão',
        messagePrefix: 'Tem certeza que deseja excluir a carona para ',
        messageEmphasis: this.ride().destino,
        messageSuffix: '?',
        cancelText: 'Cancelar',
        confirmText: 'Excluir',
      }
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.delete.emit(this.ride());
        }
      });
  }
}
