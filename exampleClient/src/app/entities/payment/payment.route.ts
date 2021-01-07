import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { CanDeactivateGuard } from 'src/app/common/shared';

// import { PaymentDetailsComponent, PaymentListComponent, PaymentNewComponent } from './';

const routes: Routes = [
  // { path: '', component: PaymentListComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: ':id', component: PaymentDetailsComponent, canDeactivate: [CanDeactivateGuard] },
  // { path: 'new', component: PaymentNewComponent },
];

export const paymentRoute: ModuleWithProviders = RouterModule.forChild(routes);
