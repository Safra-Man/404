import { Component } from '@angular/core';
import { TypographyComponent } from '../../../../shared/ui/typography/typography';

@Component({
  selector: 'app-carona-form',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './carona-form.component.html',
  styleUrl: './carona-form.component.scss',
})
export class CaronaFormComponent {}
