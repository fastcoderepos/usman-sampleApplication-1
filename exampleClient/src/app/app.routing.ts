import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SwaggerComponent } from 'src/app/swagger/swagger.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './extended/core/core.module#CoreExtendedModule',
  },
  { path: 'swagger-ui', component: SwaggerComponent },
  {
    path: 'country',
    loadChildren: './extended/entities/country/country.module#CountryExtendedModule',
  },
  {
    path: 'address',
    loadChildren: './extended/entities/address/address.module#AddressExtendedModule',
  },
  {
    path: 'city',
    loadChildren: './extended/entities/city/city.module#CityExtendedModule',
  },
  {
    path: 'filmactor',
    loadChildren: './extended/entities/film-actor/film-actor.module#FilmActorExtendedModule',
  },
  {
    path: 'staff',
    loadChildren: './extended/entities/staff/staff.module#StaffExtendedModule',
  },
  {
    path: 'language',
    loadChildren: './extended/entities/language/language.module#LanguageExtendedModule',
  },
  {
    path: 'film',
    loadChildren: './extended/entities/film/film.module#FilmExtendedModule',
  },
  {
    path: 'store',
    loadChildren: './extended/entities/store/store.module#StoreExtendedModule',
  },
  {
    path: 'inventory',
    loadChildren: './extended/entities/inventory/inventory.module#InventoryExtendedModule',
  },
  {
    path: 'rental',
    loadChildren: './extended/entities/rental/rental.module#RentalExtendedModule',
  },
  {
    path: 'actor',
    loadChildren: './extended/entities/actor/actor.module#ActorExtendedModule',
  },
  {
    path: 'payment',
    loadChildren: './extended/entities/payment/payment.module#PaymentExtendedModule',
  },
  {
    path: 'filmcategory',
    loadChildren: './extended/entities/film-category/film-category.module#FilmCategoryExtendedModule',
  },
  {
    path: 'category',
    loadChildren: './extended/entities/category/category.module#CategoryExtendedModule',
  },
  {
    path: 'customer',
    loadChildren: './extended/entities/customer/customer.module#CustomerExtendedModule',
  },
  { path: '**', component: ErrorPageComponent },
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
