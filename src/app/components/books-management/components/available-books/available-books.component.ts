import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book } from '@root/components/books-management/models/book.model';
import { BookService } from '@root/components/books-management/services/books-list.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { NgFor, NgIf } from '@angular/common';
import { BaseComponent } from '@root/components/base-component/base-component';
import { SwiperOptions } from 'swiper/types/swiper-options';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BookCardComponent, NgFor, NgIf],
})
export class AvailableBooksComponent extends BaseComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  swiper: Swiper | null = null;

  availableBooks: Book[] = [];

  swiperOptions: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    pagination: {
      enabled: true
    },
    navigation: {
      enabled: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1044: {
        slidesPerView: 4,
      },
    },
  };

  constructor(private bookService: BookService,
    private cdr: ChangeDetectorRef) {
    super();
  }

  ngAfterViewInit(): void {
    register();
    this.initSwiper();
  }


  ngOnInit(): void {
    this.subscriptions.add(this.bookService.availableBooks$.subscribe(books => {
      if (books) {
        this.availableBooks = books;
        this.cdr.detectChanges();
      }
    }));

  }

  private initSwiper(): void {
    const swiperEl: any = document.querySelector('swiper-container');
    Object.assign(swiperEl, this.swiperOptions);

    // and now initialize it
    swiperEl.initialize();
  }

}
