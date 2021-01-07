import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { InventoryDetailsComponent, InventoryListComponent, InventoryNewComponent } from './';

const routes: Routes = [
  // { path: '', component: InventoryListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: InventoryDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: InventoryNewComponent },
];

export const inventoryRoute: ModuleWithProviders = RouterModule.forChild(routes);
