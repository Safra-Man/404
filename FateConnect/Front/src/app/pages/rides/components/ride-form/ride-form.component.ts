import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TypographyComponent } from '../../../../shared/ui/typography/typography';

@Component({
  selector: 'app-ride-form',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './ride-form.component.html',
  styleUrl: './ride-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RideFormComponent {}
