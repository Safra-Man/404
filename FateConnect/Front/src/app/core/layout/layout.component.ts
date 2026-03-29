import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/ui/footer/footer.component';
import { HeaderComponent } from '../../shared/ui/header/header.component';
import { TypographyComponent } from '../../shared/ui/typography/typography';

@Component({
  selector: 'app-layout',
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
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

}
