import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/ui/footer/footer.component';
import { HeaderComponent } from '../../shared/ui/header/header.component';
import { TypographyComponent } from '../../shared/ui/typography/typography';
import { LandingAnchorService } from '../landing-anchor.service';

@Component({
  selector: 'app-layout-guest',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatSidenavModule,
    MatListModule,
    TypographyComponent,
  ],
  templateUrl: './layout-guest.component.html',
  styleUrl: './layout-guest.component.scss',
})
export class LayoutGuestComponent {
  private readonly landingAnchor = inject(LandingAnchorService);

  closeDrawerAndGoToFragment(drawer: MatSidenav, fragment: string): void {
    drawer.close();
    this.landingAnchor.go(fragment);
  }
}
