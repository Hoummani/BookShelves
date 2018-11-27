import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import {Book} from '../../models/Book.model';
import {Subject} from 'rxjs';
import {reject} from 'q';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book [];
  booksSubject = new Subject<Book[]>();

  constructor() { }
  // envoyer les livres
  emitBooks() {
    this.booksSubject.next(this.books);
  }
  // Enregistrer les livres
  saveBooks() {
    firebase.database().ref('/books').set(this.books);
  }
  // Lister les livres
  getBooks() {
    firebase.database().ref('/books').on('value',
      (data) => {
        this.books = data.val() ? data.val() : [];
        this.emitBooks();
      }
    );
  }


  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          ( data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }


  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(book: Book) {
    const bookIndexToRemove = this.books.findIndex(
      (bookEl) => {
        if (bookEl === book) {
          return true;
        }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }
}
