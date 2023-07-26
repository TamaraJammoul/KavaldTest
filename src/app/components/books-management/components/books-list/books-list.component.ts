import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BooksList } from '@root/components/books-management/models/books-list.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable, map, startWith } from 'rxjs';
import { Book } from '@root/components/books-management/models/book.model';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BookService } from '@root/components/books-management/services/books-list.service';
import { BaseComponent } from '@root/components/base-component/base-component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, NgFor } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  standalone: true,
  imports: [
    MatChipsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    NgFor,
    DragDropModule
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BooksListComponent extends BaseComponent implements OnInit {
  @ViewChild('bookInput') bookInput: ElementRef<HTMLInputElement>;
  @Input({ required: true }) booksList: BooksList;


  bookFormControl = new FormControl();
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredBooks$: Observable<Book[]>;
  availableBooks: Book[] = [];



  constructor(private bookService: BookService) { super(); }


  ngOnInit(): void {
    this.subscriptions.add(this.bookService.availableBooks$.subscribe(books => {
      if (books) {
        this.availableBooks = books;
      }
    }));

    this.filteredBooks$ = this.bookFormControl.valueChanges.pipe(
      startWith(null),
      map((value: string | null) => (value ? this._filter(value) :
        this.availableBooks.filter(book => this.booksList.books.findIndex(e => e.id === book.id) === -1).slice())),
    );

  }


  onBookSelected(event: MatAutocompleteSelectedEvent): void {
    const bookId = event.option.value;
    const book = this.availableBooks.find(e => e.id === bookId);
    this.booksList.books.push(book);
    this.bookInput.nativeElement.value = '';
    this.bookFormControl.setValue(null);
    this.bookService.updateBooksList({ ...this.booksList });
  }

  remove(bookId: string): void {
    const index = this.booksList.books.findIndex(e => e.id === bookId);

    if (index >= 0) {
      this.booksList.books.splice(index, 1);
      this.bookService.updateBooksList({ ...this.booksList });
    }
  }

  private _filter(value: string): Book[] {
    const filterValue = value.toLowerCase();
    const data = this.availableBooks.filter(book => this.booksList.books.findIndex(e => e.id === book.id) === -1);
    return data.filter(book => book.title.toLowerCase().includes(filterValue));
  }

  onListDeleted() {
    this.bookService.deleteBooksList(this.booksList);
  }

  drop(event: CdkDragDrop<unknown>) {
    moveItemInArray(this.booksList.books, event.previousIndex, event.currentIndex);
    this.bookService.updateBooksList({ ...this.booksList });
  }

}
