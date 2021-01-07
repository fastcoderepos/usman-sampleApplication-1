import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { RentalDetailsComponent, RentalListComponent, RentalNewComponent } from './';

const routes: Routes = [
  // { path: '', component: RentalListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: RentalDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: RentalNewComponent },
];

export const rentalRoute: ModuleWithProviders = RouterModule.forChild(routes);
