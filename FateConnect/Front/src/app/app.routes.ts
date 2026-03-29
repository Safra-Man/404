import { Routes } from '@angular/router';
import { LayoutGuestComponent } from './core/layout/layout-guest.component';
import { LayoutComponent } from './core/layout/layout.component';
import { CaronasComponent } from './pages/caronas/caronas.component';
import { BuscarCaronaComponent } from './pages/caronas/screens/buscar-carona/buscar-carona.component';
import { OfertarCaronaComponent } from './pages/caronas/screens/ofertar-carona/ofertar-carona.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: LayoutGuestComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      {
        path: 'caronas',
        component: CaronasComponent,
        children: [
          { path: 'buscar', component: BuscarCaronaComponent },
          { path: 'ofertar', component: OfertarCaronaComponent },
          { path: '', redirectTo: 'buscar', pathMatch: 'full' },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'inicio' },
];
