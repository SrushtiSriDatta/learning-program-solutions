package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication4 {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication4.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication4.class, args);
        LOGGER.info("Application started successfully.");

        displayCountry();  // Call to displayCountry() method
    }

    public static void displayCountry() {
        LOGGER.info("START");

        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            Country country = context.getBean("country", Country.class);
            LOGGER.debug("Country : {}", country.toString());
        }

        LOGGER.info("END");
    }

}
