import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookService } from '@root/components/books-management/services/books-list.service';
import { v4 as uuidv4 } from 'uuid';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  templateUrl: './add-books-list-dialog.component.html',
  styleUrls: ['./add-books-list-dialog.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatDialogModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
})
export class AddBooksListDialogComponent {
  bookTitleFormControl = new FormControl(null, [Validators.required, Validators.minLength(10)]);

  constructor(private bookService: BookService,
    public dialogRef: MatDialogRef<AddBooksListDialogComponent>) { }

  getErrorMessage() {
    if (this.bookTitleFormControl.hasError('required')) {
      return 'The title is required';
    }

    return this.bookTitleFormControl.hasError('minlength') ? 'Min length is 10 characters' : '';
  }

  onSave() {
    if (this.bookTitleFormControl.valid) {
      this.bookService.addBooksList({
        title: this.bookTitleFormControl.value,
        books: [],
        id: uuidv4()
      });
      this.dialogRef.close();
    }
  }
}
