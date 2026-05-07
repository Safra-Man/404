import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'subtitle'
  | 'subtitle-bold'
  | 'caption'
  | 'caption-bold'
  | 'logo';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [],
  templateUrl: './typography.html',
  styleUrl: './typography.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyComponent {
  readonly variant = input.required<TypographyVariant>();

  readonly variantClass = computed(() => `typography typography--${this.variant()}`);
}
