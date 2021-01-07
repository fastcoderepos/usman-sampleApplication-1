import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { AddressDetailsExtendedComponent, AddressListExtendedComponent, AddressNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: AddressListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: AddressDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: AddressNewExtendedComponent },
];

export const addressRoute: ModuleWithProviders = RouterModule.forChild(routes);
