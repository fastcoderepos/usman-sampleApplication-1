import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { FilmDetailsComponent, FilmListComponent, FilmNewComponent } from './';

const routes: Routes = [
  // { path: '', component: FilmListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: FilmDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: FilmNewComponent },
];

export const filmRoute: ModuleWithProviders = RouterModule.forChild(routes);
