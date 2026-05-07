import { Injectable } from '@angular/core';
import { NativeDateAdapter } from '@angular/material/core';

/** Padrão visual do placeholder (dia/mês/ano). */
const SLASH_DMY = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
const HYPHEN_DMY = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;

type DmyParts = { day: number; month: number; year: number };

/**
 * Estende o adapter nativo do Material: `Date.parse` não trata `22/05/1999` como dd/mm/aaaa,
 * o que deixava o controle sem valor e o `required` permanecia ativo.
 */
@Injectable()
export class PtBrDateAdapter extends NativeDateAdapter {
  override parse(value: unknown, parseFormat: unknown): Date | null {
    if (typeof value !== 'string') return super.parse(value, parseFormat);

    const trimmed = value.trim();
    if (trimmed.length === 0) return null;

    const fromDmy = this.tryParseDmyFormats(trimmed);
    if (fromDmy) return fromDmy;
    return super.parse(value, parseFormat);
  }

  /** `undefined` = string não está no formato dd/mm/aaaa (ou dd-mm-aaaa). */
  private tryParseDmyFormats(trimmed: string): Date | undefined {
    for (const regex of [SLASH_DMY, HYPHEN_DMY]) {
      const matched = regex.exec(trimmed);
      if (!matched) continue;
      return this.dateFromDmyMatch(matched);
    }
    return undefined;
  }

  private dateFromDmyMatch(matched: RegExpExecArray): Date {
    const parts = this.partsFromDmyMatch(matched);
    if (!parts) return this.invalid();

    try {
      const date = this.createDate(parts.year, parts.month, parts.day);
      const ok =
        this.isValid(date) &&
        this.getYear(date) === parts.year &&
        this.getMonth(date) === parts.month &&
        this.getDate(date) === parts.day;
      return ok ? date : this.invalid();
    } catch {
      return this.invalid();
    }
  }

  private partsFromDmyMatch(matched: RegExpExecArray): DmyParts | null {
    const day = Number(matched[1]);
    const month = Number(matched[2]) - 1;
    const year = Number(matched[3]);
    if (!Number.isFinite(day) || !Number.isFinite(month) || !Number.isFinite(year)) return null;

    if (month < 0 || month > 11 || day < 1 || day > 31) return null;

    return { day, month, year };
  }
}
