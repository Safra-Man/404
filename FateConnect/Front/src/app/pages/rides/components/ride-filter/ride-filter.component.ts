import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
import { RideFilter } from '../../models/ride-filter.model';
import type { RideType } from '../../models/ride-type.model';
import { TypographyComponent } from '../../../../shared/ui/typography/typography';

export type RideFilterFormGroup = FormGroup<{
  departureDate: FormControl<Date | null>;
  departureTime: FormControl<string | null>;
  destination: FormControl<string | null>;
  rideType: FormControl<RideType | null>;
}>;

@Component({
  selector: 'app-ride-filter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    FontAwesomeModule,
    TypographyComponent,
  ],
  templateUrl: './ride-filter.component.html',
  styleUrls: ['./ride-filter.component.scss']
})
export class RideFilterComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly rideFilterApply = output<RideFilter>();

  readonly filterForm: RideFilterFormGroup = this.formBuilder.group({
    departureDate: new FormControl<Date | null>(null),
    departureTime: new FormControl<string | null>(null),
    destination: new FormControl<string | null>(null),
    rideType: new FormControl<RideType | null>(null),
  });

  protected readonly filterIcon = faFilter;
  protected readonly searchIcon = faMagnifyingGlass;
  protected readonly infoIcon = faCircleInfo;
  protected readonly clockIcon = faClock;
  protected readonly calendarIcon = faCalendarDays;

  /** Valores alinhados ao `EnumTipoCarona` em .NET para binding na query string. */
  readonly rideTypeOptions: { value: RideType | null; viewValue: string }[] = [
    { value: null, viewValue: 'Todas' },
    { value: 'Filantropica', viewValue: 'Filantrópica' },
    { value: 'Igualitaria', viewValue: 'Igualitária' },
  ];

  applyFilters(): void {
    const formValue = this.filterForm.getRawValue();

    const mergedFilters: RideFilter = {};

    if (formValue.departureDate) {
      const dateValue = new Date(formValue.departureDate);
      const year = dateValue.getFullYear();
      const month = (dateValue.getMonth() + 1).toString().padStart(2, '0');
      const day = dateValue.getDate().toString().padStart(2, '0');

      mergedFilters.departureDate = `${year}-${month}-${day}`;
    }

    if (formValue.departureTime) {
      mergedFilters.departureTime = formValue.departureTime;
    }
    if (formValue.destination) {
      mergedFilters.destination = formValue.destination.trim();
    }
    if (formValue.rideType) {
      mergedFilters.rideType = formValue.rideType;
    }

    this.rideFilterApply.emit(mergedFilters);
  }
}
