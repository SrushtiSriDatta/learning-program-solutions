-- STEP 0: DROP TABLES IF THEY EXIST
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Loans CASCADE CONSTRAINTS';
EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE != -942 THEN RAISE; END IF;
END;
/

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE Customers CASCADE CONSTRAINTS';
EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE != -942 THEN RAISE; END IF;
END;
/

-- STEP 1: CREATE TABLES
CREATE TABLE Customers (
  CustomerID NUMBER PRIMARY KEY,
  Name VARCHAR2(100),
  Age NUMBER,
  Balance NUMBER,
  IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
  LoanID NUMBER PRIMARY KEY,
  CustomerID NUMBER,
  LoanAmount NUMBER,
  InterestRate NUMBER,
  StartDate DATE,
  EndDate DATE,
  FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- STEP 2: INSERT DATA
INSERT INTO Customers VALUES (1, 'Alice', 62, 12000, 'FALSE');
INSERT INTO Customers VALUES (2, 'Bob', 45, 8000, 'FALSE');
INSERT INTO Customers VALUES (3, 'Charlie', 70, 15000, 'FALSE');
COMMIT;

INSERT INTO Loans VALUES (101, 1, 20000, 6.5, SYSDATE - 90, SYSDATE + 10);
INSERT INTO Loans VALUES (102, 2, 15000, 7.0, SYSDATE - 30, SYSDATE + 60);
INSERT INTO Loans VALUES (103, 3, 30000, 7.5, SYSDATE - 60, SYSDATE + 25);
COMMIT;

-- STEP 3: CHECK DATA
SELECT * FROM Customers;
SELECT * FROM Loans;


-- Scenario 1: Apply a 1% discount to loan interest rates for customers above 60 years old
BEGIN
  FOR rec IN (
    SELECT c.CustomerID, l.LoanID, l.InterestRate
    FROM Customers c
    JOIN Loans l ON c.CustomerID = l.CustomerID
    WHERE c.Age > 60
  ) LOOP
    UPDATE Loans
    SET InterestRate = rec.InterestRate - 1
    WHERE LoanID = rec.LoanID;

    DBMS_OUTPUT.PUT_LINE('1% discount applied for Customer ID: ' || rec.CustomerID || ' | Loan ID: ' || rec.LoanID);
  END LOOP;

  COMMIT;
END;

SELECT * FROM Loans;


--Scenario 2: Promote Customers to VIP
BEGIN
  FOR rec IN (
    SELECT CustomerID, Balance
    FROM Customers
    WHERE Balance > 10000
  ) LOOP
    UPDATE Customers
    SET IsVIP = 'TRUE'
    WHERE CustomerID = rec.CustomerID;

    DBMS_OUTPUT.PUT_LINE('VIP status granted to Customer ID: ' || rec.CustomerID);
  END LOOP;

  COMMIT;
END;

SELECT * FROM Customers;


-- Scenario 3: Remind Customers Whose Loans Are Due Within 30 Days
BEGIN
  FOR rec IN (
    SELECT CustomerID, LoanID, EndDate
    FROM Loans
    WHERE EndDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.LoanID ||
                         ' for Customer ID ' || rec.CustomerID ||
                         ' is due on ' || TO_CHAR(rec.EndDate, 'DD-Mon-YYYY'));
  END LOOP;
END;
