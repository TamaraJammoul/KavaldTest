import { Book } from "../models/book.model";
import { BooksList } from "../models/books-list.model";

export const booksLists: BooksList[] = [
    {
        id: '1',
        title: 'My favorite science fiction books',
        books: [
            {
                id: '1',
                title: 'Dune',
                image: 'https://example.com/dune.jpg',
                year: 1965,
                author: 'Frank Herbert',
            },
            {
                id: '2',
                title: "Ender's Game",
                image: 'https://example.com/enders-game.jpg',
                year: 1985,
                author: 'Orson Scott Card',
            }
        ]
    },
    {
        id: '2',
        title: 'Best books in Spanish',
        books: [
            {
                id: '1',
                title: 'Dune',
                image: 'https://example.com/dune.jpg',
                year: 1965,
                author: 'Frank Herbert',
            },
            {
                id: '2',
                title: "Ender's Game",
                image: 'https://example.com/enders-game.jpg',
                year: 1985,
                author: 'Orson Scott Card',
            }
        ]
    }
];

export const availableBooks: Book[] = [
    {
        id: '1',
        title: 'Dune',
        image: 'https://example.com/dune.jpg',
        year: 1965,
        author: 'Frank Herbert',
    },
    {
        id: '2',
        title: "Ender's Game",
        image: 'https://example.com/enders-game.jpg',
        year: 1985,
        author: 'Orson Scott Card',
    },
    {
        id: '3',
        title: '1984',
        image: 'https://example.com/1984.jpg',
        year: 1949,
        author: 'George Orwell',
    },
    {
        id: '4',
        title: 'Fahrenheit 451',
        image: 'https://example.com/fahrenheit-451.jpg',
        year: 1953,
        author: 'Ray Bradbury',
    },
    {
        id: '5',
        title: 'Brave New World',
        image: 'https://example.com/brave-new-world.jpg',
        year: 1932,
        author: 'Aldous Huxley',
    },
    // Adding new books to make it a total of 10 unique items
    {
        id: '6',
        title: 'To Kill a Mockingbird',
        image: 'https://example.com/to-kill-a-mockingbird.jpg',
        year: 1960,
        author: 'Harper Lee',
    },
    {
        id: '7',
        title: 'The Great Gatsby',
        image: 'https://example.com/the-great-gatsby.jpg',
        year: 1925,
        author: 'F. Scott Fitzgerald',
    },
    {
        id: '8',
        title: 'Pride and Prejudice',
        image: 'https://example.com/pride-and-prejudice.jpg',
        year: 1813,
        author: 'Jane Austen',
    },
    {
        id: '9',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        image: 'https://example.com/harry-potter-sorcerers-stone.jpg',
        year: 1997,
        author: 'J.K. Rowling',
    },
    {
        id: '10',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        image: 'https://example.com/lotr-fellowship-of-the-ring.jpg',
        year: 1954,
        author: 'J.R.R. Tolkien',
    },
];
