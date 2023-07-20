import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBooksListDialogComponent } from './add-books-list-dialog.component';

describe('AddBooksListDialogComponent', () => {
  let component: AddBooksListDialogComponent;
  let fixture: ComponentFixture<AddBooksListDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBooksListDialogComponent]
    });
    fixture = TestBed.createComponent(AddBooksListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
