import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/ui/footer/footer.component';
import { HeaderComponent } from '../../shared/ui/header/header.component';
import { TypographyComponent } from '../../shared/ui/typography/typography';

@Component({
  selector: 'app-layout-guest',
  standalone: true,
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
export class LayoutGuestComponent {}
