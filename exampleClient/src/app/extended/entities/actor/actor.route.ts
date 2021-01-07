import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { ActorDetailsExtendedComponent, ActorListExtendedComponent, ActorNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: ActorListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: ActorDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: ActorNewExtendedComponent },
];

export const actorRoute: ModuleWithProviders = RouterModule.forChild(routes);
