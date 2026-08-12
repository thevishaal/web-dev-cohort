-- Task: Create a subquery that selects users from USA, then count how many there are.


-- solution

-- Write your SQL query here
SELECT COUNT(*)
FROM (
    SELECT *
    FROM users
    WHERE country = 'USA'
) AS usa_users;