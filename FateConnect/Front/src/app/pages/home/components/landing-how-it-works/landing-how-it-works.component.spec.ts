import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingHowItWorksComponent } from './landing-how-it-works.component';

describe('LandingHowItWorksComponent', () => {
  let fixture: ComponentFixture<LandingHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingHowItWorksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingHowItWorksComponent);
    fixture.detectChanges();
  });

  it('deve exibir dois passos', () => {
    const passos = fixture.nativeElement.querySelectorAll('.passo');
    expect(passos.length).toBe(2);
  });

  it('deve mencionar Cadastre-se e Explore', () => {
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Cadastre-se');
    expect(text).toContain('Explore');
  });
});
