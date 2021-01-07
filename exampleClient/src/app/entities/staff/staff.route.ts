import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { StaffDetailsComponent, StaffListComponent, StaffNewComponent } from './';

const routes: Routes = [
  // { path: '', component: StaffListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: StaffDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: StaffNewComponent },
];

export const staffRoute: ModuleWithProviders = RouterModule.forChild(routes);
