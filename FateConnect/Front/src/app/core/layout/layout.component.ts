import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/ui/footer/footer.component';
import { HeaderComponent } from '../../shared/ui/header/header.component';


@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {

}
