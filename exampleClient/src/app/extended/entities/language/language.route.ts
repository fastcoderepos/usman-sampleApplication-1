import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { LanguageDetailsExtendedComponent, LanguageListExtendedComponent, LanguageNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: LanguageListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: LanguageDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: LanguageNewExtendedComponent },
];

export const languageRoute: ModuleWithProviders = RouterModule.forChild(routes);
