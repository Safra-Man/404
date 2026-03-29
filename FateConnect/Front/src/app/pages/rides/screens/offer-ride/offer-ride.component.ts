import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from '../../../../shared/ui/typography/typography';

@Component({
  selector: 'app-offer-ride',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FontAwesomeModule, MatSnackBarModule, TypographyComponent],
  templateUrl: './offer-ride.component.html',
  styleUrl: './offer-ride.component.scss'
})
export class OfferRideComponent {
  private readonly snackBar = inject(MatSnackBar);

  readonly addIcon = faPlus;

  onOfferClick(): void {
    this.snackBar.open('Cadastro de nova carona em breve.', 'OK', {
      duration: 3500,
      verticalPosition: 'top',
      panelClass: ['snackbar-warning'],
    });
  }
}
