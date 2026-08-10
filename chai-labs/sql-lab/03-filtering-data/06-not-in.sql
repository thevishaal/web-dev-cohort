-- Task: Select name and country from users where country is NOT in ('USA', 'Canada').


-- solution

-- Write your SQL query here
SELECT name, country FROM users WHERE country NOT IN ('USA', 'Canada');