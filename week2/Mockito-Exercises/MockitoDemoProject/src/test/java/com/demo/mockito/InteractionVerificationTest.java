package com.demo.mockito;

import static org.mockito.Mockito.*;

import org.junit.Test;

public class InteractionVerificationTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        CalculatorService calcService = mock(CalculatorService.class);

        // Step 2: Inject mock into MathApplication
        MathApplication mathApp = new MathApplication();
        mathApp.setCalculatorService(calcService);

        // Step 3: Call the method
        mathApp.add(10, 20);

        // Step 4: Verify interaction
        verify(calcService).add(10, 20);
    }
}
