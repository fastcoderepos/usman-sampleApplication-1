import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import {
  FilmCategoryDetailsExtendedComponent,
  FilmCategoryListExtendedComponent,
  FilmCategoryNewExtendedComponent,
} from './';

const routes: Routes = [
  { path: '', component: FilmCategoryListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: FilmCategoryDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: FilmCategoryNewExtendedComponent },
];

export const filmCategoryRoute: ModuleWithProviders = RouterModule.forChild(routes);
