import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TypographyComponent } from '../../../../shared/ui/typography/typography';

interface Step {
  readonly number: 1 | 2;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-landing-how-it-works',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './landing-how-it-works.component.html',
  styleUrl: './landing-how-it-works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHowItWorksComponent {
  readonly steps: readonly Step[] = [
    {
      number: 1,
      title: 'Cadastre-se',
      description:
        'Crie sua conta com o e-mail institucional da Fatec Sorocaba para fazer parte da comunidade verificada do FateConnect.',
    },
    {
      number: 2,
      title: 'Explore',
      description:
        'Busque caronas, publique em achados e perdidos e use os demais serviços pensados para o dia a dia no campus.',
    },
  ];
}
