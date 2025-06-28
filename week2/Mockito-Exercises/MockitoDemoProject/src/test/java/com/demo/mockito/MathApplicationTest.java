package com.demo.mockito;

import org.junit.Test;
import org.mockito.Mockito;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class MathApplicationTest {

    @Test
    public void testAdd() {
        // Create mock
        CalculatorService calcService = mock(CalculatorService.class);

        // Inject mock into MathApplication
        MathApplication mathApp = new MathApplication();
        mathApp.setCalculatorService(calcService);

        // Define behavior
        when(calcService.add(10, 20)).thenReturn(30);

        // Test
        int result = mathApp.add(10, 20);
        assertEquals(30, result);
    }
}
