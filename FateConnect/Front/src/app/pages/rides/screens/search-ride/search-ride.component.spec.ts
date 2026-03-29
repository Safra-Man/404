import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { SearchRideComponent } from './search-ride.component';
import { RideService } from '../../services/ride.service';
import { Ride } from '../../models/ride.model';

describe('SearchRideComponent', () => {
  let fixture: ComponentFixture<SearchRideComponent>;
  let rideService: jasmine.SpyObj<RideService>;

  const rideMock: Ride = {
    id: 1,
    qtdVagas: 3,
    destino: 'Fatec',
    dataPartida: '2025-01-01',
    horaPartida: '08:00:00',
    dataCadastro: '2025-01-01T00:00:00',
    tipoCarona: 'Filantropica',
    descricao: 'Teste',
    ativo: true,
  };

  beforeEach(async () => {
    rideService = jasmine.createSpyObj('RideService', ['listRides', 'deleteRide']);
    rideService.listRides.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [SearchRideComponent],
      providers: [MatSnackBar, { provide: RideService, useValue: rideService }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchRideComponent);
  });

  it('deve chamar listRides ao iniciar', () => {
    fixture.detectChanges();
    expect(rideService.listRides).toHaveBeenCalledWith(undefined);
    expect(fixture.componentInstance.rideList()).toEqual([]);
  });

  it('deve atualizar lista quando a API retorna dados', async () => {
    rideService.listRides.and.returnValue(of([rideMock]));
    const f = TestBed.createComponent(SearchRideComponent);
    f.detectChanges();
    await f.whenStable();
    expect(f.componentInstance.rideList()).toEqual([rideMock]);
  });
});
