-- Task: Show countries that have more than 3 users. Display country and user count.



-- solution
-- Write your SQL query here
SELECT country, COUNT(*) FROM users GROUP BY country HAVING COUNT(*) > 3 ;