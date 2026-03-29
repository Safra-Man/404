import type { RideType } from './ride-type.model';

/**
 * Filtros de listagem no Front (nomes em inglês).
 * `destination` → `Destino`; `departureDate` → `DataPartida`; `departureTime` → `HoraPartida`; `rideType` → `TipoCarona`.
 */
export interface RideFilter {
  destination?: string;
  departureDate?: string;
  departureTime?: string;
  rideType?: RideType;
}
