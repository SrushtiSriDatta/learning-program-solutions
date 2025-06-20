package com.example.singleton;

public class Main {
    public static void main(String[] args) {
        System.out.println("Main method started.");  // 👈 Debug print

        Logger logger1 = Logger.getInstance();
        logger1.log("This is the first log.");

        Logger logger2 = Logger.getInstance();
        logger2.log("This is the second log.");

        if (logger1 == logger2) {
            System.out.println("Both logger1 and logger2 are the same instance.");
        } else {
            System.out.println("Different instances exist. Singleton failed!");
        }
    }
}
