import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { RouterModule, Routes } from '@angular/router';
import { BooksManagementComponent } from './components/books-management/books-management.component';
import { AvailableBooksComponent } from './components/available-books/available-books.component';
import { MatButtonModule } from '@angular/material/button';
import { AddBooksListDialogComponent } from './components/add-books-list-dialog/add-books-list-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: BooksManagementComponent
  },
];

@NgModule({
  declarations: [
    BooksManagementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    BookCardComponent,
    AvailableBooksComponent,
    BooksListComponent,
    MatDialogModule,
    AddBooksListDialogComponent
  ]
})
export class BooksManagementModule { }
