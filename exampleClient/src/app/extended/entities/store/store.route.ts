import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { StoreDetailsExtendedComponent, StoreListExtendedComponent, StoreNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: StoreListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: StoreDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: StoreNewExtendedComponent },
];

export const storeRoute: ModuleWithProviders = RouterModule.forChild(routes);
