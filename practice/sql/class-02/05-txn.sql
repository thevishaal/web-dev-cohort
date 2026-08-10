CREATE TABLE accounts (
    name VARCHAR(50),
    amount INT
);


INSERT INTO accounts 
(name, amount)
VALUES
('vishal', 5000),
('raj', 5000);

SELECT * FROM accounts;

-- BEGIN is the txn begin
-- COMMIT - This will commit the changes
-- ROLLBACK - 