import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { CountryDetailsComponent, CountryListComponent, CountryNewComponent } from './';

const routes: Routes = [
  // { path: '', component: CountryListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: CountryDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: CountryNewComponent },
];

export const countryRoute: ModuleWithProviders = RouterModule.forChild(routes);
