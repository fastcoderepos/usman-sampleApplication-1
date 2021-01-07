import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { ActorDetailsComponent, ActorListComponent, ActorNewComponent } from './';

const routes: Routes = [
  // { path: '', component: ActorListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: ActorDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: ActorNewComponent },
];

export const actorRoute: ModuleWithProviders = RouterModule.forChild(routes);
