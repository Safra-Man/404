/** Valores canônicos alinhados ao `EnumTipoCarona` em .NET e à serialização JSON. */
export type RideType = 'Filantropica' | 'Igualitaria';

/** Entrada em minúsculas normalizada → valor canônico do enum. */
const LOWERCASE_TO_RIDE_TYPE: Readonly<Record<string, RideType>> = {
  filantropica: 'Filantropica',
  igualitaria: 'Igualitaria',
};

/** Interpreta respostas da API (PascalCase) ou valores de query em minúsculas. */
export function parseRideType(raw: string | null | undefined): RideType | null {
  if (!raw) return null;

  const normalizedLowercase = raw.trim().toLowerCase();
  return LOWERCASE_TO_RIDE_TYPE[normalizedLowercase] ?? null;
}

export function rideTypeTagClass(value: string): string {
  const canonicalType = parseRideType(value);
  if (!canonicalType) return 'tag';

  return canonicalType === 'Filantropica' ? 'tag tag-green' : 'tag tag-brown';
}

export function rideTypeDisplayLabel(value: string): string {
  const canonicalType = parseRideType(value);
  if (!canonicalType) return value.trim() || '—';

  return canonicalType === 'Filantropica' ? 'Filantrópica' : 'Igualitária';
}
