import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Book } from '@root/components/books-management/models/book.model';
import { BookService } from '@root/components/books-management/services/books-list.service';
import { register } from 'swiper/element/bundle';
import { BookCardComponent } from '../book-card/book-card.component';
import { NgFor, NgIf } from '@angular/common';
import { BaseComponent } from '@root/components/base-component/base-component';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BookCardComponent, NgFor, NgIf]
})
export class AvailableBooksComponent extends BaseComponent implements OnInit {

  availableBooks: Book[] = [];

  constructor(private bookService: BookService,
    private cdr: ChangeDetectorRef) {
    register();
    super();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.bookService.availableBooks$.subscribe(books => {
      if (books) {
        this.availableBooks = books;
        this.cdr.detectChanges();
      }
    }));
  }

}
