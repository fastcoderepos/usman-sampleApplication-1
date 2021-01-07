import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { InventoryDetailsExtendedComponent, InventoryListExtendedComponent, InventoryNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: InventoryListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: InventoryDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: InventoryNewExtendedComponent },
];

export const inventoryRoute: ModuleWithProviders = RouterModule.forChild(routes);
