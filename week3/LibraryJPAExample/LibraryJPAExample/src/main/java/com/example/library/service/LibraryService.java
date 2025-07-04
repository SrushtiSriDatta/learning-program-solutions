package com.example.library.service;

import com.example.library.entity.Book;
import com.example.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibraryService {

    @Autowired
    private BookRepository repository;

    public void addSampleBooks() {
        repository.save(new Book(null, "Spring in Action", "Craig Walls"));
        repository.save(new Book(null, "Effective Java", "Joshua Bloch"));
    }

    public void listBooks() {
        List<Book> books = repository.findAll();
        books.forEach(book ->
                System.out.println(book.getTitle() + " by " + book.getAuthor()));
    }
}
