import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { TypographyComponent } from '../../shared/ui/typography/typography';

@Component({
  selector: 'app-lost-and-found-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatButtonModule, TypographyComponent],
  templateUrl: './lost-and-found-page.component.html',
  styleUrl: './lost-and-found-page.component.scss',
})
export class LostAndFoundPageComponent {}
