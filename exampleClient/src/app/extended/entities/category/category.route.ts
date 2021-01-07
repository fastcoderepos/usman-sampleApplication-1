import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { CategoryDetailsExtendedComponent, CategoryListExtendedComponent, CategoryNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: CategoryListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: CategoryDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: CategoryNewExtendedComponent },
];

export const categoryRoute: ModuleWithProviders = RouterModule.forChild(routes);
