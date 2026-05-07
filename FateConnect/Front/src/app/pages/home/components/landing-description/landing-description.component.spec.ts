import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingDescriptionComponent } from './landing-description.component';

describe('LandingDescriptionComponent', () => {
  let fixture: ComponentFixture<LandingDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingDescriptionComponent);
    fixture.detectChanges();
  });

  it('deve exibir o título da hero', () => {
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Conectando a Comunidade Acadêmica');
  });

  it('deve renderizar quatro destaques', () => {
    const items = fixture.nativeElement.querySelectorAll('.highlight-item');
    expect(items.length).toBe(4);
  });
});
