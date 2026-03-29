import { Component } from '@angular/core';
import { LandingDescriptionComponent } from './components/landing-description/landing-description.component';
import { LandingHowItWorksComponent } from './components/landing-how-it-works/landing-how-it-works.component';
import { LandingLoginCardComponent } from './components/landing-login-card/landing-login-card.component';
import { LandingServicesComponent } from './components/landing-services/landing-services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingDescriptionComponent,
    LandingLoginCardComponent,
    LandingServicesComponent,
    LandingHowItWorksComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
