package com.demo.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerExample {
    // Creating a Logger instance
    private static final Logger logger = LoggerFactory.getLogger(LoggerExample.class);

    public static void main(String[] args) {
        logger.info("This is an INFO message.");
        logger.warn("This is a WARNING message.");
        logger.error("This is an ERROR message.");
    }
}
