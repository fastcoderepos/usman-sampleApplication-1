import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { FilmDetailsExtendedComponent, FilmListExtendedComponent, FilmNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: FilmListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: FilmDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: FilmNewExtendedComponent },
];

export const filmRoute: ModuleWithProviders = RouterModule.forChild(routes);
