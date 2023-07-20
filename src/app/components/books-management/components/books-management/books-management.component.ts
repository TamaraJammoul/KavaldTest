import { Component, OnInit } from '@angular/core';
import { AddBooksListDialogComponent } from '../add-books-list-dialog/add-books-list-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from '@root/components/base-component/base-component';
import { BooksList } from '@root/components/books-management/models/books-list.model';
import { BookService } from '@root/components/books-management/services/books-list.service';

@Component({
  selector: 'app-books-management',
  templateUrl: './books-management.component.html',
  styleUrls: ['./books-management.component.scss']
})
export class BooksManagementComponent extends BaseComponent implements OnInit {
  booksLists: BooksList[] = [];

  constructor(private bookService: BookService,
    public dialog: MatDialog) { super(); }

  ngOnInit(): void {
    this.bookService.getAvailableBooksList();
    this.bookService.getBooksLists();

    this.subscriptions.add(this.bookService.booksLists$.subscribe(books => {
      this.booksLists = books;
    }));
  }

  onAddNewList() {
    this.dialog.open(AddBooksListDialogComponent, {
      width: '400px',
    });
  }

}
