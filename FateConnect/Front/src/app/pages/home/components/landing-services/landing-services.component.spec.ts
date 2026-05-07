import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingServicesComponent } from './landing-services.component';

describe('LandingServicesComponent', () => {
  let fixture: ComponentFixture<LandingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingServicesComponent);
    fixture.detectChanges();
  });

  it('deve ter título Nossos Serviços', () => {
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Nossos Serviços');
  });

  it('deve renderizar quatro cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('.service-card');
    expect(cards.length).toBe(4);
  });
});
