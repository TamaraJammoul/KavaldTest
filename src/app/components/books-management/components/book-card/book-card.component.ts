import { Component, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  standalone: true,
  imports: [MatCardModule]
})
export class BookCardComponent {
  @Input({ required: true }) book: Book;


}
