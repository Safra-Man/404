import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NavigationEnd, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs/operators';
import { TypographyComponent } from '../../../../shared/ui/typography/typography';

@Component({
  selector: 'app-landing-login-card',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    TypographyComponent,
  ],
  templateUrl: './landing-login-card.component.html',
  styleUrl: './landing-login-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingLoginCardComponent implements AfterViewInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  readonly hidePassword = signal(true);
  readonly faEye = faEye;
  readonly faEyeSlash = faEyeSlash;

  ngAfterViewInit(): void {
    const focusEmail = (): void => {
      const input = this.host.nativeElement.querySelector('#landing-login-email') as
        | HTMLInputElement
        | null;
      input?.focus();
    };

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        if (this.router.parseUrl(this.router.url).fragment === 'login') {
          setTimeout(focusEmail);
        }
      });

    if (this.router.parseUrl(this.router.url).fragment === 'login') {
      setTimeout(focusEmail);
    }
  }

  togglePasswordVisibility(): void {
    this.hidePassword.update((v) => !v);
  }

  onSubmit(): void {
    if (this.form.valid) {
      /* UI only (#11): autenticação real virá com a API. */
    } else {
      this.form.markAllAsTouched();
    }
  }
}
