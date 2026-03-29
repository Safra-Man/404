import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';

import { LayoutGuestComponent } from './layout-guest.component';

@Component({ standalone: true, template: '' })
class InicioStubComponent {}

describe('LayoutGuestComponent', () => {
  let fixture: ComponentFixture<LayoutGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutGuestComponent],
      providers: [provideRouter([{ path: 'inicio', component: InicioStubComponent }])],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutGuestComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('deve listar no sidenav os quatro itens com fragment e logo para /inicio', () => {
    const sidenav = fixture.debugElement.query(By.css('mat-sidenav'));
    expect(sidenav).not.toBeNull();
    if (!sidenav) return;

    const links = sidenav.queryAll(By.directive(RouterLink));
    const routerLinks = links.map((el) => el.injector.get(RouterLink));

    const fragments = routerLinks
      .map((rl) => rl.fragment)
      .filter((f): f is string => f != null)
      .sort((a, b) => a.localeCompare(b));
    expect(fragments).toEqual(['como-funciona', 'contato', 'login', 'servicos']);

    const logo = sidenav.query(By.css('a.logo-app'));
    expect(logo).not.toBeNull();
    if (!logo) return;
    const logoRl = logo.injector.get(RouterLink);
    expect(logoRl.fragment).toBeUndefined();
    expect((logo.nativeElement as HTMLAnchorElement).href).toContain('inicio');
  });
});
