import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BirthDateSlashMaskDirective } from './birth-date-slash-mask.directive';

@Component({
  standalone: true,
  imports: [BirthDateSlashMaskDirective],
  template: `<input #birth type="text" appBirthDateSlashMask />`,
})
class BirthDateMaskHostComponent {}

let fixture: ComponentFixture<BirthDateMaskHostComponent>;
let input: HTMLInputElement;

function dispatchInput(): void {
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

describe('BirthDateSlashMaskDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthDateMaskHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BirthDateMaskHostComponent);
    fixture.detectChanges();
    const debugInput = fixture.debugElement.query(By.css('input'));
    if (!debugInput) {
      fail('esperado input com appBirthDateSlashMask');
      return;
    }
    input = debugInput.nativeElement as HTMLInputElement;
  });

  it('não altera valor já igual ao formato esperado e não dispara input sintético', fakeAsync(() => {
    input.value = '22/11/1999';
    const dispatchSpy = spyOn(input, 'dispatchEvent').and.callThrough();
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('22/11/1999');
    expect(dispatchSpy.calls.count()).toBe(1);
  }));

  it('formata oito dígitos seguidos como dd/mm/aaaa', fakeAsync(() => {
    input.value = '22111999';
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('22/11/1999');
  }));

  it('corta a mais de oito dígitos e aplica máscara', fakeAsync(() => {
    input.value = '1234567890123';
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('12/34/5678');
  }));

  it('mantém só dia quando há até dois dígitos', fakeAsync(() => {
    input.value = '7';
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('7');
  }));

  it('insere barra após o dia com três ou quatro dígitos', fakeAsync(() => {
    input.value = '221';
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('22/1');

    input.value = '2211';
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('22/11');
  }));

  it('completa data com barras após cinco a oito dígitos', fakeAsync(() => {
    input.value = '22111';
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('22/11/1');

    input.value = '22111999';
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('22/11/1999');
  }));

  it('ignora caracteres não numéricos ao montar a máscara', fakeAsync(() => {
    input.value = '22a11b1999';
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('22/11/1999');
  }));

  it('dispara input sintético após formatar para sincronizar o modelo', fakeAsync(() => {
    input.value = '01012000';
    const calls: string[] = [];
    input.addEventListener('input', () => calls.push(input.value));
    dispatchInput();
    flushMicrotasks();
    expect(input.value).toBe('01/01/2000');
    expect(calls.length).toBeGreaterThan(0);
    expect(calls).toContain('01/01/2000');
  }));

  it('paste agenda a mesma formatação em microtask', fakeAsync(() => {
    input.value = '15121990';
    input.dispatchEvent(new Event('paste', { bubbles: true }));
    flushMicrotasks();
    expect(input.value).toBe('15/12/1990');
  }));
});
