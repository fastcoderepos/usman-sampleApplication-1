import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from 'src/app/common/shared';
import { PaymentDetailsExtendedComponent, PaymentListExtendedComponent, PaymentNewExtendedComponent } from './';

const routes: Routes = [
  { path: '', component: PaymentListExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: ':id', component: PaymentDetailsExtendedComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'new', component: PaymentNewExtendedComponent },
];

export const paymentRoute: ModuleWithProviders = RouterModule.forChild(routes);
