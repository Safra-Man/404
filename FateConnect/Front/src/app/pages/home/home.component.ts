import { Component } from '@angular/core';
import { TypographyComponent } from '../../shared/ui/typography/typography';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
