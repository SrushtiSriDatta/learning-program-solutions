-- STEP 1: Create the SavingsAccounts table
CREATE TABLE SavingsAccounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    Balance NUMBER
);

-- STEP 2: Insert sample data
INSERT INTO SavingsAccounts VALUES (201, 1, 10000);
INSERT INTO SavingsAccounts VALUES (202, 2, 7500);
INSERT INTO SavingsAccounts VALUES (203, 3, 12000);
COMMIT;

-- STEP 3: Check data
SELECT * FROM SavingsAccounts;


-- Create stored procedure to apply 1% monthly interest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    FOR rec IN (SELECT AccountID, Balance FROM SavingsAccounts) LOOP
        UPDATE SavingsAccounts
        SET Balance = Balance + (rec.Balance * 0.01)
        WHERE AccountID = rec.AccountID;

        DBMS_OUTPUT.PUT_LINE('Interest applied to Account ID: ' || rec.AccountID);
    END LOOP;

    COMMIT;
END;
/


BEGIN
    ProcessMonthlyInterest;
END;
/

SELECT * FROM SavingsAccounts;


-- Scenario 2: Employee Bonus Procedure step by step.
-- STEP 1: Create Employees Table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DepartmentID NUMBER,
    Salary NUMBER
);

-- STEP 2: Insert Sample Data
-- Insert sample employees
INSERT INTO Employees VALUES (1, 'John', 101, 50000);
INSERT INTO Employees VALUES (2, 'Emma', 102, 55000);
INSERT INTO Employees VALUES (3, 'Raj', 101, 48000);
INSERT INTO Employees VALUES (4, 'Sara', 103, 60000);
COMMIT;

--STEP 3: View Employee Table
SELECT * FROM Employees;

-- STEP 4: Create the UpdateEmployeeBonus Stored Procedure
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_department_id IN NUMBER,
    p_bonus_percentage IN NUMBER
)
IS
BEGIN
    FOR rec IN (
        SELECT * FROM Employees WHERE DepartmentID = p_department_id
    ) LOOP
        UPDATE Employees
        SET Salary = Salary + (Salary * p_bonus_percentage / 100)
        WHERE EmployeeID = rec.EmployeeID;

        DBMS_OUTPUT.PUT_LINE('Bonus applied to ' || rec.Name || 
                             ' (ID: ' || rec.EmployeeID || 
                             ') New Salary: ' || 
                             TO_CHAR(rec.Salary + (rec.Salary * p_bonus_percentage / 100)));
    END LOOP;

    COMMIT;
END;
/

-- STEP 5: Execute the Procedure
BEGIN
    UpdateEmployeeBonus(101, 10);
END;
/

-- STEP 6: Verify the Salary Update
SELECT * FROM Employees;

-- STEP 7 – Transfer Funds Between Accounts
CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN
    -- Get balance of source account
    SELECT Balance INTO v_balance FROM SavingsAccounts WHERE AccountID = p_from_account;

    IF v_balance >= p_amount THEN
        -- Deduct from source
        UPDATE SavingsAccounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        -- Add to destination
        UPDATE SavingsAccounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

        DBMS_OUTPUT.PUT_LINE('Transferred ' || p_amount || 
                             ' from Account ' || p_from_account || 
                             ' to Account ' || p_to_account);
        COMMIT;
    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient balance in Account ' || p_from_account);
    END IF;
END;
/

BEGIN
    TransferFunds(203, 202, 1000);
END;
/

SELECT * FROM SavingsAccounts;
