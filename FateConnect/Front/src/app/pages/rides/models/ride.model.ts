import type { RideType } from './ride-type.model';

/** Entidade alinhada ao JSON da API Caronas (nomes de campo em camelCase do backend). */
export interface Ride {
  id: number;
  qtdVagas: number;
  destino: string;
  dataPartida: string;
  horaPartida: string;
  dataCadastro: string;
  tipoCarona: RideType;
  descricao: string;
  ativo: boolean;
}
