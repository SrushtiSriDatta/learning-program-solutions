package com.demo.junit;

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    Calculator calc = new Calculator();

    @Test
    public void testAdd() {
        assertEquals(10, calc.add(7, 3));
    }

    @Test
    public void testIsEvenTrue() {
        assertTrue(calc.isEven(6));
    }

    @Test
    public void testIsEvenFalse() {
        assertFalse(calc.isEven(7));
    }

    @Test(expected = ArithmeticException.class)
    public void testDivideByZero() {
        calc.divide(10, 0);
    }
}
