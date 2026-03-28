import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { TypographyComponent } from '../typography/typography';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, TypographyComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
}
