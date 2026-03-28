import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeftLong, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from '../../shared/ui/typography/typography';

@Component({
  selector: 'app-caronas',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FontAwesomeModule,
    TypographyComponent,
  ],
  templateUrl: './caronas.component.html',
  styleUrl: './caronas.component.scss',
})
export class CaronasComponent {
  iconeVoltar = faArrowLeftLong;
  iconeBuscar = faMagnifyingGlass;
  iconeAdicionar = faPlus;
}
