import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { FilmActorDetailsExtendedComponent, FilmActorListExtendedComponent, FilmActorNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: FilmActorListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: FilmActorDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: FilmActorNewExtendedComponent },
];

export const filmActorRoute: ModuleWithProviders = RouterModule.forChild(routes);
