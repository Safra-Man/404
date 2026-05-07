import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { RideService } from './ride.service';

describe('RideService', () => {
  let service: RideService;
  let httpMock: HttpTestingController;

  const baseUrl = `${environment.apiUrl}/caronas`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RideService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(RideService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve fazer GET em /caronas sem query quando não há filtros', () => {
    service.listRides().subscribe();
    const req = httpMock.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    expect(req.request.params.keys().length).toBe(0);
    req.flush([]);
  });

  it('deve enviar query params alinhados ao FilterCaronaDto', () => {
    service
      .listRides({
        destination: 'Campus',
        departureDate: '2025-01-15',
        departureTime: '08:30:00',
        rideType: 'Filantropica',
      })
      .subscribe();

    const req = httpMock.expectOne(
      (r) =>
        r.url === baseUrl &&
        r.params.get('Destino') === 'Campus' &&
        r.params.get('DataPartida') === '2025-01-15' &&
        r.params.get('HoraPartida') === '08:30:00' &&
        r.params.get('TipoCarona') === 'Filantropica'
    );
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('deve DELETE por id', () => {
    service.deleteRide(42).subscribe();
    const req = httpMock.expectOne(`${baseUrl}/42`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
