import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LandingLoginCardComponent } from './landing-login-card.component';

describe('LandingLoginCardComponent', () => {
  let fixture: ComponentFixture<LandingLoginCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingLoginCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingLoginCardComponent);
    fixture.detectChanges();
  });

  it('não deve marcar campos até o submit', () => {
    expect(fixture.componentInstance.form.touched).toBeFalse();
  });

  it('deve marcar campos inválidos ao submeter vazio', () => {
    fixture.componentInstance.onSubmit();
    fixture.detectChanges();
    expect(fixture.componentInstance.form.touched).toBeTrue();
  });

  it('deve alternar tipo do campo senha ao clicar no botão', () => {
    const host = fixture.nativeElement as HTMLElement;
    const passwordInput = host.querySelector<HTMLInputElement>(
      'input[formcontrolname="password"]'
    )!;
    const toggle = host.querySelector<HTMLButtonElement>('button[aria-label="Mostrar ou ocultar senha"]')!;

    expect(passwordInput.type).toBe('password');
    toggle.click();
    fixture.detectChanges();
    expect(passwordInput.type).toBe('text');
    toggle.click();
    fixture.detectChanges();
    expect(passwordInput.type).toBe('password');
  });
});
