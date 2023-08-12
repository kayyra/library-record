import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: Book[] = [];

  constructor(private bookService: BookService){}

  ngOnInit(): void{
    this.getBooks();
  }

  getBooks(): void{
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  deleteBook(id: number): void{
    this.bookService.getBooks().subscribe(books =>{
      this.getBooks();
    });
  }

  editBook(book: Book): void{
    console.log('Editing Book:', book);
  }
}


