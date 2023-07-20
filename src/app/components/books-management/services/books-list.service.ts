import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model';
import { BooksList } from '../models/books-list.model';
import { availableBooks, booksLists } from '../data/books-data';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    availableBookListSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
    availableBooks$ = this.availableBookListSubject.asObservable();

    bookListSubject: BehaviorSubject<BooksList[]> = new BehaviorSubject<BooksList[]>([]);
    booksLists$ = this.bookListSubject.asObservable();

    booksLists: BooksList[] = booksLists;

    availableBooks: Book[] = availableBooks;



    getAvailableBooksList() {
        this.availableBookListSubject.next(this.availableBooks);
    }

    getBooksLists() {
        this.bookListSubject.next(this.booksLists);
    }

    addBooksList(list: BooksList) {
        const updatedList = [list, ...this.booksLists];
        this.booksLists = updatedList;
        this.bookListSubject.next(updatedList);
    }

    deleteBooksList(list: BooksList) {
        const updatedList = this.booksLists.filter(e => e.id !== list.id);
        this.booksLists = updatedList;
        this.bookListSubject.next(updatedList);
    }

    updateBooksList(list: BooksList) {
        const newBooksLists = [...this.booksLists];
        const index = this.booksLists.findIndex(e => e.id === list.id);
        if (index !== -1) {
            newBooksLists[index] = list;
        }
        this.booksLists = newBooksLists;
        this.bookListSubject.next(newBooksLists);
    }

}