import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { CityDetailsExtendedComponent, CityListExtendedComponent, CityNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: CityListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: CityDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: CityNewExtendedComponent },
];

export const cityRoute: ModuleWithProviders = RouterModule.forChild(routes);
