import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { LanguageDetailsComponent, LanguageListComponent, LanguageNewComponent } from './';

const routes: Routes = [
  // { path: '', component: LanguageListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: LanguageDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: LanguageNewComponent },
];

export const languageRoute: ModuleWithProviders = RouterModule.forChild(routes);
