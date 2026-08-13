-- Task: Select all countries from users and all countries from suppliers. Keep all rows including duplicates.



-- solution
-- Write your SQL query here
SELECT country
FROM users

UNION ALL

SELECT country
FROM suppliers;