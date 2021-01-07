import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { StoreDetailsComponent, StoreListComponent, StoreNewComponent } from './';

const routes: Routes = [
  // { path: '', component: StoreListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: StoreDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: StoreNewComponent },
];

export const storeRoute: ModuleWithProviders = RouterModule.forChild(routes);
