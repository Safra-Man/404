import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCircleInfo,
  faFilter,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';

import {
  faCalendarDays,
  faClock
} from '@fortawesome/free-regular-svg-icons';
import { FiltroCarona } from '../../models/filtro.model';

@Component({
  selector: 'app-carona-filter',
  imports: [
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FontAwesomeModule
  ],
  templateUrl: './carona-filter.component.html',
  styleUrls: ['./carona-filter.component.scss']
})
export class CaronaFilterComponent {
  @Output() filterTriggered = new EventEmitter<any>();

  filterForm: FormGroup;

  protected readonly iconeFiltro = faFilter;
  protected readonly iconeLupa = faMagnifyingGlass;
  protected readonly iconeInfo = faCircleInfo;
  protected readonly iconeRelogio = faClock;
  protected readonly iconeAgenda = faCalendarDays;

  tipoCarona = [
    { value: '', viewValue: 'Todas' },
    { value: 'filantropica', viewValue: 'Filantrópica' },
    { value: 'igualitaria', viewValue: 'Igualitária' },
  ];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      data: [null],
      hora: [null],
      destino: [null],
      tipoCarona: [null]
    });
  }

  onFiltrar(): void {
    const formValue = this.filterForm.value;

    const filtrosSobrepostos: FiltroCarona = {};

    if (formValue.data) {
      const dataObjeto = new Date(formValue.data);
      const ano = dataObjeto.getFullYear();
      const mes = (dataObjeto.getMonth() + 1).toString().padStart(2, '0');
      const dia = dataObjeto.getDate().toString().padStart(2, '0');

      filtrosSobrepostos.data = `${ano}-${mes}-${dia}`;
    }

    if (formValue.hora) filtrosSobrepostos.hora = formValue.hora;
    if (formValue.destino) filtrosSobrepostos.destino = formValue.destino.trim();
    if (formValue.tipoCarona) filtrosSobrepostos.tipoCarona = formValue.tipoCarona;

    this.filterTriggered.emit(filtrosSobrepostos);
  }
}
