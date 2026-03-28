import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from '../../shared/ui/typography/typography';

@Component({
  selector: 'app-menu',
  imports: [FontAwesomeModule, RouterModule, TypographyComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  faSearch = faSearch;
  faCar = faCar;
}
