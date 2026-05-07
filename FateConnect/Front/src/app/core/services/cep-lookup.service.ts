import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';

/**
 * Endereço retornado por provedores de CEP (ViaCEP / OpenCEP).
 * ViaCEP, quando o CEP não existe, responde 200 com `{ erro: "true" }`.
 */
export interface BrazilianCepAddressDto {
  readonly cep?: string;
  readonly logradouro?: string;
  readonly complemento?: string;
  readonly bairro?: string;
  readonly localidade?: string;
  readonly uf?: string;
  readonly erro?: string;
}

@Injectable({ providedIn: 'root' })
export class CepLookupService {
  private readonly http = inject(HttpClient);

  /**
   * Consulta o CEP: primeiro [ViaCEP](https://viacep.com.br/); em falha HTTP (rede, erro 4xx/5xx),
   * tenta [OpenCEP](https://opencep.com/) (`/v1/{cep}.json`).
   * `zipDigits` deve conter exatamente 8 dígitos (somente números).
   */
  lookup(zipDigits: string): Observable<BrazilianCepAddressDto> {
    const viaCepUrl = `https://viacep.com.br/ws/${zipDigits}/json/`;
    const openCepUrl = `https://opencep.com/v1/${zipDigits}.json`;
    return this.http.get<BrazilianCepAddressDto>(viaCepUrl).pipe(
      catchError(() => this.http.get<BrazilianCepAddressDto>(openCepUrl))
    );
  }
}
