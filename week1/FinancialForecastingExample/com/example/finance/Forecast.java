package com.example.finance;

public class Forecast {

    // Recursive method to calculate future value
    public static double forecast(double currentValue, double rate, int years) {
        if (years == 0) return currentValue;
        return forecast(currentValue * (1 + rate), rate, years - 1);
    }

    // Optimized (iterative) method to calculate future value
    public static double forecastOptimized(double currentValue, double rate, int years) {
        for (int i = 0; i < years; i++) {
            currentValue *= (1 + rate);
        }
        return currentValue;
    }

    public static void main(String[] args) {
        double initialAmount = 1000.0;    // Initial investment
        double annualGrowthRate = 0.10;   // 10% growth rate
        int forecastYears = 5;

        // Recursive call
        double futureValueRecursive = forecast(initialAmount, annualGrowthRate, forecastYears);
        System.out.printf("Recursive: Future value after %d years: %.2f%n", forecastYears, futureValueRecursive);

        // Optimized call
        double futureValueOptimized = forecastOptimized(initialAmount, annualGrowthRate, forecastYears);
        System.out.printf("Optimized: Future value after %d years: %.2f%n", forecastYears, futureValueOptimized);
    }
}

