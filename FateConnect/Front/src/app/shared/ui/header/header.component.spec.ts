import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';

import { LandingAnchorService } from '../../../core/landing-anchor.service';
import { HeaderComponent } from './header.component';

@Component({ standalone: true, template: '' })
class InicioStubComponent {}

@Component({ standalone: true, template: '' })
class MenuStubComponent {}

@Component({ standalone: true, template: '' })
class AchadosStubComponent {}

@Component({ standalone: true, template: '' })
class CaronasStubComponent {}

@Component({ standalone: true, template: '' })
class ContatoStubComponent {}

describe('HeaderComponent (guest / isLoggedIn=false)', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let landingAnchor: LandingAnchorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([{ path: 'inicio', component: InicioStubComponent }])],
    }).compileComponents();

    landingAnchor = TestBed.inject(LandingAnchorService);
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.componentRef.setInput('isLoggedIn', false);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('desktop: cada botão da landing chama landingAnchor.go com o fragmento esperado', () => {
    spyOn(landingAnchor, 'go');
    const menu = fixture.debugElement.query(By.css('.desktop-menu'));
    expect(menu).not.toBeNull();
    if (!menu) return;

    const buttons = menu.queryAll(By.css('button'));
    expect(buttons.length).toBe(4);

    const expected = ['servicos', 'como-funciona', 'contato', 'login'];
    for (let i = 0; i < expected.length; i++) {
      (buttons[i].nativeElement as HTMLButtonElement).click();
      expect(landingAnchor.go).toHaveBeenCalledWith(expected[i]);
    }
  });

  it('deve exibir o botão hambúrguer', () => {
    const btn = fixture.debugElement.query(By.css('.mobile-menu-btn'));
    expect(btn).toBeTruthy();
  });

  it('deve usar âncora no logo com destino /inicio', () => {
    const logo = fixture.debugElement.query(By.css('a.logo-app'));
    expect(logo).not.toBeNull();
    if (!logo) return;
    const rl = logo.injector.get(RouterLink);
    expect(rl.fragment).toBeUndefined();
    expect((logo.nativeElement as HTMLAnchorElement).href).toContain('inicio');
  });
});

describe('HeaderComponent (logado / isLoggedIn default)', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([
          { path: 'menu', component: MenuStubComponent },
          { path: 'achados-perdidos', component: AchadosStubComponent },
          { path: 'caronas', component: CaronasStubComponent },
          { path: 'contato', component: ContatoStubComponent },
        ]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('deve exibir toolbar e botão hambúrguer', () => {
    expect(fixture.debugElement.query(By.css('mat-toolbar'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('.mobile-menu-btn'))).toBeTruthy();
  });

  it('logo deve apontar para /menu', () => {
    const logo = fixture.debugElement.query(By.css('a.logo-app'));
    expect(logo).not.toBeNull();
    if (!logo) return;
    expect((logo.nativeElement as HTMLAnchorElement).href).toContain('menu');
  });

  it('deve expor rótulos das rotas principais na área logada', () => {
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(text).toContain('Achados');
    expect(text).toContain('Caronas');
    expect(text).toMatch(/Contato/i);
  });
});
