import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { CustomerDetailsComponent, CustomerListComponent, CustomerNewComponent } from './';

const routes: Routes = [
  // { path: '', component: CustomerListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: CustomerDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: CustomerNewComponent },
];

export const customerRoute: ModuleWithProviders = RouterModule.forChild(routes);
