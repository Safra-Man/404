import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Navegação para `/inicio` com fragmento + scroll até o elemento.
 * O Router costuma ignorar navegações “iguais” só com hash diferente; o scroll nativo
 * também falha se o scroll principal não for a janela — daí o `scrollIntoView` após o `navigate`.
 */
@Injectable({ providedIn: 'root' })
export class LandingAnchorService {
  private readonly router = inject(Router);

  go(fragment: string): void {
    const scrollToTarget = (): void => {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    void this.router.navigate(['/inicio'], { fragment }).finally(() => {
      setTimeout(scrollToTarget, 0);
      setTimeout(scrollToTarget, 100);
    });
  }
}
