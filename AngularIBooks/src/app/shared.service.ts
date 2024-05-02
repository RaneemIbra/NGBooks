import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private books = new BehaviorSubject<any[]>([]);

  currentBooks = this.books.asObservable();

  constructor() {}

  addBook(book: any) {
    this.books.next([...this.books.value, book]);
  }
}
