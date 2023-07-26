import { Routes } from '@angular/router';
import { ApplicationRoutes } from './settings/application-routes';

export const routes: Routes = [
  {
    path: ApplicationRoutes.Empty,
    redirectTo: ApplicationRoutes.Books,
    pathMatch: 'full'
  },
  {
    path: ApplicationRoutes.Books,
    loadChildren: () =>
      import(
        './components/books-management/books-management.module'
      ).then((m) => m.BooksManagementModule),
  },
];

