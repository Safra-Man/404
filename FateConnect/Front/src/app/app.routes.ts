import { Routes } from '@angular/router';
import { LayoutGuestComponent } from './core/layout/layout-guest.component';
import { LayoutComponent } from './core/layout/layout.component';
import { RidesComponent } from './pages/rides/rides.component';
import { SearchRideComponent } from './pages/rides/screens/search-ride/search-ride.component';
import { OfferRideComponent } from './pages/rides/screens/offer-ride/offer-ride.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LostAndFoundPageComponent } from './pages/lost-and-found/lost-and-found-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';

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
      { path: 'achados-perdidos', component: LostAndFoundPageComponent },
      { path: 'contato', component: ContactPageComponent },
      {
        path: 'caronas',
        component: RidesComponent,
        children: [
          { path: 'buscar', component: SearchRideComponent },
          { path: 'ofertar', component: OfferRideComponent },
          { path: '', redirectTo: 'buscar', pathMatch: 'full' },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'inicio' },
];
