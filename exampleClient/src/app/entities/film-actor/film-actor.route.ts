import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { FilmActorDetailsComponent, FilmActorListComponent, FilmActorNewComponent } from './';

const routes: Routes = [
  // { path: '', component: FilmActorListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: FilmActorDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: FilmActorNewComponent },
];

export const filmActorRoute: ModuleWithProviders = RouterModule.forChild(routes);
