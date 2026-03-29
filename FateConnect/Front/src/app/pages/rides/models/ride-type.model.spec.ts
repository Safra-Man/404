import {
  rideTypeDisplayLabel,
  rideTypeTagClass,
  parseRideType,
} from './ride-type.model';

describe('ride-type.model', () => {
  it('parseRideType aceita PascalCase e minúsculas', () => {
    expect(parseRideType('Filantropica')).toBe('Filantropica');
    expect(parseRideType('filantropica')).toBe('Filantropica');
    expect(parseRideType('Igualitaria')).toBe('Igualitaria');
    expect(parseRideType('igualitaria')).toBe('Igualitaria');
    expect(parseRideType(' inválido ')).toBeNull();
    expect(parseRideType(null)).toBeNull();
  });

  it('rideTypeDisplayLabel retorna rótulos de UI em português', () => {
    expect(rideTypeDisplayLabel('Filantropica')).toBe('Filantrópica');
    expect(rideTypeDisplayLabel('igualitaria')).toBe('Igualitária');
  });

  it('rideTypeTagClass retorna classes CSS esperadas', () => {
    expect(rideTypeTagClass('Filantropica')).toBe('tag tag-green');
    expect(rideTypeTagClass('Igualitaria')).toBe('tag tag-brown');
    expect(rideTypeTagClass('desconhecido')).toBe('tag');
  });
});
