import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { LandingAnchorService } from '../../../core/landing-anchor.service';
import { TypographyComponent } from '../typography/typography';

@Component({
  selector: 'app-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FontAwesomeModule,
    TypographyComponent,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * Quando `true`, exibe a barra “após login” (menu, caronas, contato).
   * Quando `false`, exibe a navegação da landing (`/inicio` + fragmentos).
   * TODO - Atribuir este input ao estado de sessão com autenticação real.
   */
  readonly isLoggedIn = input(true);

  readonly drawer = input<MatSidenav | undefined>(undefined);

  readonly menuIcon = faBars;

  protected readonly landingAnchor = inject(LandingAnchorService);
}
