import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { FilmCategoryDetailsComponent, FilmCategoryListComponent, FilmCategoryNewComponent } from './';

const routes: Routes = [
  // { path: '', component: FilmCategoryListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: FilmCategoryDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: FilmCategoryNewComponent },
];

export const filmCategoryRoute: ModuleWithProviders = RouterModule.forChild(routes);
