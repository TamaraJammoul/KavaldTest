import { Book } from './book.model';

export interface BooksList {
    id: string;
    title: string;
    books: Book[];
}