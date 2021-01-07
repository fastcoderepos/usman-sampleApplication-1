import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { RentalDetailsExtendedComponent, RentalListExtendedComponent, RentalNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: RentalListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: RentalDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: RentalNewExtendedComponent },
];

export const rentalRoute: ModuleWithProviders = RouterModule.forChild(routes);
