import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from '../../shared/ui/typography/typography';

@Component({
  selector: 'app-menu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, RouterModule, TypographyComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  readonly searchIcon = faSearch;
  readonly carIcon = faCar;
}
