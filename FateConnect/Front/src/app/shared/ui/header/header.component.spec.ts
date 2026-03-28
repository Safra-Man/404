import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';

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

function findLinkByFragment(
  fixture: ComponentFixture<HeaderComponent>,
  fragment: string,
): RouterLink | undefined {
  const elements = fixture.debugElement.queryAll(By.directive(RouterLink));
  for (const el of elements) {
    const link = el.injector.get(RouterLink);
    if (link.fragment === fragment) return link;
  }
  return undefined;
}

describe('HeaderComponent (guest / isLoggedIn=false)', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([{ path: 'inicio', component: InicioStubComponent }])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.componentRef.setInput('isLoggedIn', false);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('deve expor link para Serviços com fragment servicos', () => {
    const link = findLinkByFragment(fixture, 'servicos');
    expect(link).toBeTruthy();
    expect(link?.fragment).toBe('servicos');
  });

  it('deve expor link Entrar com fragment login', () => {
    const link = findLinkByFragment(fixture, 'login');
    expect(link).toBeTruthy();
    expect(link?.fragment).toBe('login');
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

  it('links com fragment devem apontar para /inicio', () => {
    const expectedFragments = ['servicos', 'como-funciona', 'contato', 'login'];
    for (const f of expectedFragments) {
      const link = findLinkByFragment(fixture, f);
      expect(link).withContext(`fragment ${f}`).toBeTruthy();
      if (!link) continue;
      expect(link.href).toContain('inicio');
    }
  });

  it('href dos links com fragment deve incluir /inicio e hash', () => {
    const link = findLinkByFragment(fixture, 'servicos');
    expect(link?.href).toContain('inicio');
    expect(link?.href).toContain('servicos');
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
