import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCar, faSearch, faShieldHalved, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from '../../../../shared/ui/typography/typography';

interface DescriptionHighlight {
  readonly label: string;
  readonly icon: IconDefinition;
}

@Component({
  selector: 'app-landing-description',
  standalone: true,
  imports: [TypographyComponent, FontAwesomeModule],
  templateUrl: './landing-description.component.html',
  styleUrl: './landing-description.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingDescriptionComponent {
  readonly highlights: readonly DescriptionHighlight[] = [
    { label: 'Caronas Seguras', icon: faCar },
    { label: 'Achados & Perdidos', icon: faSearch },
    { label: 'Portal de Denúncias', icon: faShieldHalved },
    { label: 'Comunidade Verificada', icon: faUserGroup },
  ];
}
