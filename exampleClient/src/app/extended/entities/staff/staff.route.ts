import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { StaffDetailsExtendedComponent, StaffListExtendedComponent, StaffNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: StaffListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: StaffDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: StaffNewExtendedComponent },
];

export const staffRoute: ModuleWithProviders = RouterModule.forChild(routes);
