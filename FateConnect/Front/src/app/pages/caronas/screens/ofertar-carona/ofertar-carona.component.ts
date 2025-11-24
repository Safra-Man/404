import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ofertar-carona',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './ofertar-carona.component.html',
  styleUrl: './ofertar-carona.component.scss'
})
export class OfertarCaronaComponent {

  iconeAdicionar = faPlus;

  onClickOfertar(): void {
    // TODO - abrir formulário/modal para ofertar carona
    // Placeholder para ação
  }
}
