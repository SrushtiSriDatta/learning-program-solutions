package com.demo.junit;

import static org.junit.Assert.*;
import org.junit.*;

public class CalculatorTest_AAAPattern {

    private Calculator calc;

    @Before // Setup: runs before each test
    public void setUp() {
        calc = new Calculator();
        System.out.println(">> Setup executed");
    }

    @After // Teardown: runs after each test
    public void tearDown() {
        System.out.println(">> Teardown executed");
    }

    @Test
    public void testAdd() {
        // Arrange done in setup()
        // Act
        int result = calc.add(2, 3);
        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testIsEvenTrue() {
        // Act & Assert
        assertTrue(calc.isEven(10));
    }

    @Test
    public void testIsEvenFalse() {
        // Act & Assert
        assertFalse(calc.isEven(7));
    }

    @Test(expected = ArithmeticException.class)
    public void testDivideByZero() {
        // Act
        calc.divide(10, 0);
    }
}
