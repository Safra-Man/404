import { Component, signal } from '@angular/core';
import { LayoutComponent } from './core/layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  template: `<app-layout></app-layout>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly title = signal('Front');
}
