import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { CategoryDetailsComponent, CategoryListComponent, CategoryNewComponent } from './';

const routes: Routes = [
  // { path: '', component: CategoryListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: CategoryDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: CategoryNewComponent },
];

export const categoryRoute: ModuleWithProviders = RouterModule.forChild(routes);
