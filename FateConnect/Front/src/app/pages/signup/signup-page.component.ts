import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from '../../shared/ui/typography/typography';
import { BRAZILIAN_STATES } from './brazilian-states.constant';
import { GENDER_OPTIONS, type GenderValue } from './gender-options.constant';

function brazilianPhoneValidator(control: AbstractControl): ValidationErrors | null {
  const raw = String(control.value ?? '').replaceAll(/\D/g, '');
  if (!raw.length) return null;
  if (raw.length < 10 || raw.length > 11) return { brazilianPhone: true };

  return null;
}

@Component({
  selector: 'app-signup-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSnackBarModule,
    FontAwesomeModule,
    TypographyComponent,
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss',
})
export class SignupPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly snackBar = inject(MatSnackBar);

  readonly hidePassword = signal(true);
  readonly eyeIcon = faEye;
  readonly eyeSlashIcon = faEyeSlash;

  readonly genderOptions = GENDER_OPTIONS;
  readonly brazilianStates = BRAZILIAN_STATES;

  readonly maxBirthDate = new Date();
  readonly minBirthDate = new Date(1900, 0, 1);

  readonly form = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    nickname: [''],
    fatecEmail: ['', [Validators.required, Validators.email]],
    birthDate: [null as Date | null, Validators.required],
    gender: ['' as GenderValue | '', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
    zipCode: [''],
    state: [''],
    city: [''],
    street: [''],
    streetNumber: [''],
    complement: [''],
    phone: ['', [Validators.required, brazilianPhoneValidator]],
    contactEmail: ['', [Validators.required, Validators.email]],
    acceptTerms: [false, Validators.requiredTrue],
    acceptMarketing: [false],
  });

  togglePasswordVisibility(): void {
    this.hidePassword.update((v) => !v);
  }

  notifyLegalSoon(event: Event, kind: 'terms' | 'privacy'): void {
    event.preventDefault();
    event.stopPropagation();
    const message =
      kind === 'terms'
        ? 'Termos de uso estarão disponíveis em breve.'
        : 'Política de privacidade estará disponível em breve.';
    this.snackBar.open(message, 'OK', {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-warning'],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.snackBar.open('Cadastro será integrado à API em breve.', 'OK', {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-warning'],
    });
    /* UI antecipada: persistência e auth virão com o backend. */
  }
}
