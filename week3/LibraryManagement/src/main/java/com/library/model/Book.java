package com.library.model;

public class Book {
    private String title;
    private String author;

    // Constructor for Constructor Injection
    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public void displayInfo() {
        System.out.println("Book: " + title + ", Author: " + author);
    }
}
