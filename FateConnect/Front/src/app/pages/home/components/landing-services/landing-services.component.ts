import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCar, faSearch, faShieldHalved, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from '../../../../shared/ui/typography/typography';

interface ServiceCard {
  readonly title: string;
  readonly description: string;
  readonly icon: IconDefinition;
}

@Component({
  selector: 'app-landing-services',
  standalone: true,
  imports: [TypographyComponent, FontAwesomeModule],
  templateUrl: './landing-services.component.html',
  styleUrl: './landing-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingServicesComponent {
  readonly services: readonly ServiceCard[] = [
    {
      title: 'Caronas Universitárias',
      description:
        'Encontre ou ofereça caronas para outros estudantes da Fatec. Economize dinheiro e faça novos amigos no caminho.',
      icon: faCar,
    },
    {
      title: 'Achados & Perdidos',
      description:
        'Perdeu algo no campus? Encontre seu objeto de volta de maneira fácil e rápida com a nossa plataforma!',
      icon: faSearch,
    },
    {
      title: 'Comunidade Verificada',
      description:
        'Todos os usuários são verificados através do e-mail institucional, garantindo que você interaja apenas com membros da comunidade acadêmica.',
      icon: faUserGroup,
    },
    {
      title: 'Portal de Denúncias',
      description:
        'Relate situações inadequadas, assédio, bullying ou qualquer comportamento impróprio de forma anônima e segura. Sua denúncia será tratada com total confidencialidade.',
      icon: faShieldHalved,
    },
  ];
}
