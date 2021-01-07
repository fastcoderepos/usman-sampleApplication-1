import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { AddressDetailsComponent, AddressListComponent, AddressNewComponent } from './';

const routes: Routes = [
  // { path: '', component: AddressListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: AddressDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: AddressNewComponent },
];

export const addressRoute: ModuleWithProviders = RouterModule.forChild(routes);
