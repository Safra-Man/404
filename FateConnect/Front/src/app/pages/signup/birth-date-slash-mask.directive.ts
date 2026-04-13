import { DestroyRef, Directive, ElementRef, OnInit, inject } from '@angular/core';

const MAX_DAY_MONTH_YEAR_DIGITS = 8;

/** Monta `dd/mm/aaaa` a partir só de dígitos (máx. 8). */
function toDdMmYyyy(digitsOnly: string): string {
  const capped = digitsOnly.slice(0, MAX_DAY_MONTH_YEAR_DIGITS);
  if (capped.length <= 2) return capped;
  if (capped.length <= 4) return `${capped.slice(0, 2)}/${capped.slice(2)}`;
  return `${capped.slice(0, 2)}/${capped.slice(2, 4)}/${capped.slice(4)}`;
}

/**
 * Formata dd/mm/aaaa e limita a 8 dígitos. O ajuste roda em microtask após o `input`,
 * para ficar depois do MatDatepicker e evitar que o valor volte sem barras.
 */
@Directive({
  selector: '[appBirthDateSlashMask]',
  standalone: true,
})
export class BirthDateSlashMaskDirective implements OnInit {
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);
  private readonly destroyRef = inject(DestroyRef);

  /** Evita reagir ao `input` disparado ao sincronizar valor máscara → modelo. */
  private isProgrammaticInputSync = false;

  ngOnInit(): void {
    const nativeInput = this.elementRef.nativeElement;

    const enqueueFormatAfterCurrentTask = (): void => {
      if (this.isProgrammaticInputSync) return;
      queueMicrotask(() => this.applySlashMaskAndNotify(nativeInput));
    };

    nativeInput.addEventListener('input', enqueueFormatAfterCurrentTask);
    nativeInput.addEventListener('paste', enqueueFormatAfterCurrentTask);

    this.destroyRef.onDestroy(() => {
      nativeInput.removeEventListener('input', enqueueFormatAfterCurrentTask);
      nativeInput.removeEventListener('paste', enqueueFormatAfterCurrentTask);
    });
  }

  private applySlashMaskAndNotify(nativeInput: HTMLInputElement): void {
    const valueBefore = nativeInput.value;
    const caretIndex = nativeInput.selectionStart ?? valueBefore.length;
    const digitCountLeftOfCaret = valueBefore.slice(0, caretIndex).replaceAll(/\D/g, '').length;

    const digitsOnly = valueBefore.replaceAll(/\D/g, '').slice(0, MAX_DAY_MONTH_YEAR_DIGITS);
    const maskedValue = toDdMmYyyy(digitsOnly);
    if (maskedValue === valueBefore) return;

    this.isProgrammaticInputSync = true;
    try {
      nativeInput.value = maskedValue;
      this.placeCaretAfterDigitIndex(nativeInput, maskedValue, digitCountLeftOfCaret);
      nativeInput.dispatchEvent(new Event('input', { bubbles: true }));
    } finally {
      this.isProgrammaticInputSync = false;
    }
  }

  /**
   * Mantém o cursor alinhado à quantidade de dígitos que estavam à esquerda do caret
   * antes da máscara (útil ao inserir ou apagar no meio do texto).
   */
  private placeCaretAfterDigitIndex(
    nativeInput: HTMLInputElement,
    maskedValue: string,
    targetDigitCountFromStart: number,
  ): void {
    let digitsSeen = 0;
    let caretAfterIndex = maskedValue.length;

    for (let index = 0; index < maskedValue.length; index++) {
      const character = maskedValue[index];
      if (character === undefined || !/\d/.test(character)) continue;

      digitsSeen++;
      if (digitsSeen >= targetDigitCountFromStart) {
        caretAfterIndex = index + 1;
        break;
      }
    }

    nativeInput.setSelectionRange(caretAfterIndex, caretAfterIndex);
  }
}
