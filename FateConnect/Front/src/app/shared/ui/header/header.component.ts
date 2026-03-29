import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
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
  /** Quando `false`, exibe navegação da landing (rotas em `/inicio` com fragmentos). */
  readonly isLoggedIn = input(true);

  readonly drawer = input<MatSidenav | undefined>(undefined);

  readonly iconeMenu = faBars;

  protected readonly landingAnchor = inject(LandingAnchorService);
}
