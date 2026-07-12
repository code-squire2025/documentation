import { Routes } from '@angular/router';
import { documentationRoutes } from './pages/documentation/documentation.routes';
import { LandingPage } from './pages/landing/landing.page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  { path: 'landing', component: LandingPage },

  ...documentationRoutes
];
