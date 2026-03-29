import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, RouterLink } from '@angular/router';

import { LandingAnchorService } from '../landing-anchor.service';
import { LayoutGuestComponent } from './layout-guest.component';

@Component({ standalone: true, template: '' })
class InicioStubComponent {}

describe('LayoutGuestComponent', () => {
  let fixture: ComponentFixture<LayoutGuestComponent>;
  let landingAnchor: LandingAnchorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutGuestComponent],
      providers: [provideRouter([{ path: 'inicio', component: InicioStubComponent }])],
    }).compileComponents();

    landingAnchor = TestBed.inject(LandingAnchorService);
    fixture = TestBed.createComponent(LayoutGuestComponent);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('deve listar no sidenav quatro itens que chamam landingAnchor.go com o fragmento certo', () => {
    spyOn(landingAnchor, 'go');
    const sidenav = fixture.debugElement.query(By.css('mat-sidenav'));
    expect(sidenav).not.toBeNull();
    if (!sidenav) return;

    const items = sidenav.queryAll(By.css('a[mat-list-item]'));
    expect(items.length).toBe(4);

    const expected = ['servicos', 'como-funciona', 'contato', 'login'];
    for (let i = 0; i < expected.length; i++) {
      (items[i].nativeElement as HTMLElement).click();
      expect(landingAnchor.go).toHaveBeenCalledWith(expected[i]);
    }
  });

  it('logo no sidenav aponta para /inicio sem fragment', () => {
    const sidenav = fixture.debugElement.query(By.css('mat-sidenav'));
    expect(sidenav).not.toBeNull();
    if (!sidenav) return;

    const logo = sidenav.query(By.css('a.logo-app'));
    expect(logo).not.toBeNull();
    if (!logo) return;
    const logoRl = logo.injector.get(RouterLink);
    expect(logoRl.fragment).toBeUndefined();
    expect((logo.nativeElement as HTMLAnchorElement).href).toContain('inicio');
  });
});
