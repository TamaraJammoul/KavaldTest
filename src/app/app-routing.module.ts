import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRoutes } from './settings/application-routes';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
