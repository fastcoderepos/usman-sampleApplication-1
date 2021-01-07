import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { CountryDetailsExtendedComponent, CountryListExtendedComponent, CountryNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: CountryListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: CountryDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: CountryNewExtendedComponent },
];

export const countryRoute: ModuleWithProviders = RouterModule.forChild(routes);
