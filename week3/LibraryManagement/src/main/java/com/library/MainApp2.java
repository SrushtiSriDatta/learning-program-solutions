package com.library;

import com.library.service.LibraryService;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp2 {
    public static void main(String[] args) {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext2.xml")) {
            LibraryService service = context.getBean("libraryService", LibraryService.class);
            service.showBook();
        }
    }
}
