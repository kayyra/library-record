import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BookService {
 private apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

    createBook(book: Book): Observable<Book>{
      return this.http.post<Book>(this.apiUrl, book);
    }

    updateBook(book: Book): Observable<Book>{
      const url = `${this.apiUrl}/${book.id}`;
      return this.http.put<Book>(url, book);
    }

    deleteBook(id: number): Observable<any>{
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete(url);
    }

}
