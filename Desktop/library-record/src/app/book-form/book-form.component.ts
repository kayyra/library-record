import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
 bookForm: FormGroup;
 isEditing: boolean = false;
 editingBookId?: number = 0;

 constructor(private fb: FormBuilder, private bookService: BookService){
   this.bookForm = this.fb.group({
    image: ['',Validators.required],
    name: ['',Validators.required],
    editorial: ['',Validators.required],
    gender: ['',Validators.required],
    author: ['',Validators.required],
   });
 }

 ngOnInit(): void {}

 onSubmit(): void{
  const bookData = this.bookForm.value;
  if( this.isEditing){
    bookData.id = this.editingBookId;
    this.bookService.updateBook(bookData).subscribe(() =>{

    });
  }else{
    this.bookService.createBook(bookData).subscribe(() => {

    });
  }
  this.resetForm();
 }

 resetForm(): void{
  this.bookForm.reset();
  this.isEditing = false;
  this.editingBookId = undefined;
 }

 editBook(book: Book): void{
  this.isEditing = true;
  this.editingBookId = book.id;
  this.bookForm.patchValue(book);
 }

}
