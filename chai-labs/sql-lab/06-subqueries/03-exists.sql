
-- Task: Select name and email of users who exist in the orders table (have made orders).


-- Solution

-- Write your SQL query here
SELECT name, email
FROM users
WHERE id IN (
    SELECT user_id
    FROM orders
);