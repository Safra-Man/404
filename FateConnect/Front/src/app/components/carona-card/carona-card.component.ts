import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faClock,
  faPenToSquare,
  faTrash,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { Carona } from '../../pages/caronas/models/carona.model';

@Component({
  selector: 'app-carona-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, FontAwesomeModule],
  templateUrl: './carona-card.component.html',
  styleUrl: './carona-card.component.scss'
})
export class CaronaCardComponent {
  @Input({ required: true }) carona!: Carona;

  iconeCalendario = faCalendar;
  iconeRelogio = faClock;
  iconeUserGroup = faUserGroup;
  iconeEditar = faPenToSquare;
  iconeDeletar = faTrash;

  getCorTipoCarona(tipo: string): string {
    return tipo == "Filantropica" ? "verde" : "marrom";
  }

  getTextoTipoCaronaCorrigido(tipo: string): string {
    return tipo == "Filantropica" ? "Filantrópica" : "Igualitária";
  }
}
