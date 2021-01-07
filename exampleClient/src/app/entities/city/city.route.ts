import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { CityDetailsComponent, CityListComponent, CityNewComponent } from './';

const routes: Routes = [
  // { path: '', component: CityListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: CityDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: CityNewComponent },
];

export const cityRoute: ModuleWithProviders = RouterModule.forChild(routes);
