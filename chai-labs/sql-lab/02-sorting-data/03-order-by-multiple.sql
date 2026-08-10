-- Task: Select name, country, and age from users. Sort first by country (A-Z), then by age (youngest first) within each country.


-- solution

-- Write your SQL query here
SELECT name, country, age FROM users ORDER BY country ASC,  age ASC;