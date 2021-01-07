import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { CustomerDetailsExtendedComponent, CustomerListExtendedComponent, CustomerNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: CustomerListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: CustomerDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: CustomerNewExtendedComponent },
];

export const customerRoute: ModuleWithProviders = RouterModule.forChild(routes);
