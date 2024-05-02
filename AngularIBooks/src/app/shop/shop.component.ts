import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  books: Book[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentBooks.subscribe((books) => {
      this.books = books;
    });
  }
}
