import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { CaronasComponent } from './pages/caronas/caronas.component';
import { BuscarCaronaComponent } from './pages/caronas/screens/buscar-carona/buscar-carona.component';
import { OfertarCaronaComponent } from './pages/caronas/screens/ofertar-carona/ofertar-carona.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      { path: '', redirectTo: 'menu', pathMatch: 'full' },

      { path: 'menu', component: MenuComponent },

      {
        path: 'caronas',
        component: CaronasComponent,

        children: [
          { path: 'buscar', component: BuscarCaronaComponent },

          { path: 'ofertar', component: OfertarCaronaComponent },

          { path: '', redirectTo: 'buscar', pathMatch: 'full' }
        ]
      }
    ]
  },

  { path: '**', redirectTo: 'menu' }
];
