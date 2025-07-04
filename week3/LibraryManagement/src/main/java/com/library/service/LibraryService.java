package com.library.service;

import com.library.model.Book;

public class LibraryService {
    private Book book;

    // Constructor Injection
    public LibraryService(Book book) {
        this.book = book;
    }

    public void showBook() {
        book.displayInfo();
    }
}
