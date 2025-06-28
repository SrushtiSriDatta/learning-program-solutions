package com.demo.mockito;

public class MathApplication {
    private CalculatorService calcService;

    public void setCalculatorService(CalculatorService calcService) {
        this.calcService = calcService;
    }

    public int add(double a, double b) {
        return calcService.add(a, b);
    }
}
