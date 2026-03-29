import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeftLong, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from '../../shared/ui/typography/typography';

@Component({
  selector: 'app-rides',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    TypographyComponent,
  ],
  templateUrl: './rides.component.html',
  styleUrl: './rides.component.scss',
})
export class RidesComponent {
  readonly backIcon = faArrowLeftLong;
  readonly searchIcon = faMagnifyingGlass;
  readonly addIcon = faPlus;
}
