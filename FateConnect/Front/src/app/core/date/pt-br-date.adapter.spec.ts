import { TestBed } from '@angular/core/testing';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { PtBrDateAdapter } from './pt-br-date.adapter';

describe('PtBrDateAdapter', () => {
  let adapter: PtBrDateAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }, PtBrDateAdapter],
    });
    adapter = TestBed.inject(PtBrDateAdapter);
  });

  it('interpreta dd/mm/aaaa com barra como calendário brasileiro', () => {
    const parsed = adapter.parse('22/05/1999', null);
    expect(parsed).not.toBeNull();
    if (parsed === null) return;
    expect(adapter.isValid(parsed)).toBe(true);
    expect(parsed.getFullYear()).toBe(1999);
    expect(parsed.getMonth()).toBe(4);
    expect(parsed.getDate()).toBe(22);
  });

  it('interpreta dd-mm-aaaa com hífen', () => {
    const parsed = adapter.parse('03-12-2001', null);
    expect(parsed).not.toBeNull();
    if (parsed === null) return;
    expect(adapter.isValid(parsed)).toBe(true);
    expect(parsed.getFullYear()).toBe(2001);
    expect(parsed.getMonth()).toBe(11);
    expect(parsed.getDate()).toBe(3);
  });

  it('remove espaços antes e depois da string', () => {
    const parsed = adapter.parse('  01/01/2000  ', null);
    expect(parsed).not.toBeNull();
    if (parsed === null) return;
    expect(adapter.isValid(parsed)).toBe(true);
    expect(parsed.getFullYear()).toBe(2000);
    expect(parsed.getMonth()).toBe(0);
    expect(parsed.getDate()).toBe(1);
  });

  it('retorna null para string vazia ou só espaços', () => {
    expect(adapter.parse('', null)).toBeNull();
    expect(adapter.parse('   ', null)).toBeNull();
  });

  it('retorna data inválida para dia inexistente no mês', () => {
    const parsed = adapter.parse('31/04/2000', null);
    expect(parsed).not.toBeNull();
    if (parsed === null) return;
    expect(adapter.isValid(parsed)).toBe(false);
  });

  it('retorna data inválida para 29/02 em ano não bissexto', () => {
    const parsed = adapter.parse('29/02/2001', null);
    expect(parsed).not.toBeNull();
    if (parsed === null) return;
    expect(adapter.isValid(parsed)).toBe(false);
  });

  it('aceita 29/02 em ano bissexto', () => {
    const parsed = adapter.parse('29/02/2000', null);
    expect(parsed).not.toBeNull();
    if (parsed === null) return;
    expect(adapter.isValid(parsed)).toBe(true);
    expect(parsed.getMonth()).toBe(1);
    expect(parsed.getDate()).toBe(29);
  });

  it('delega número ao adapter nativo (timestamp)', () => {
    const parsed = adapter.parse(0, null);
    expect(parsed).not.toBeNull();
    if (parsed === null) return;
    expect(adapter.isValid(parsed)).toBe(true);
    expect(parsed.getTime()).toBe(0);
  });

  it('delega ISO 8601 ao adapter nativo quando não é padrão dd/mm/aaaa', () => {
    const parsed = adapter.parse('1999-05-22', null);
    expect(parsed).not.toBeNull();
    if (parsed === null) return;
    expect(adapter.isValid(parsed)).toBe(true);
    expect(parsed.getUTCFullYear()).toBe(1999);
    expect(parsed.getUTCMonth()).toBe(4);
    expect(parsed.getUTCDate()).toBe(22);
  });
});
