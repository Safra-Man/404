import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { APP_CONTACT } from '../../constants/app-contact';
import { TypographyComponent } from '../typography/typography';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, TypographyComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly contact = APP_CONTACT;
  readonly envelopeIcon = faEnvelope;
  readonly phoneIcon = faPhone;
  readonly locationIcon = faLocationDot;
}
