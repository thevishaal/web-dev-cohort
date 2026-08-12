-- Task: Select name and price of products where price is greater than the average product price.


-- solution

-- Write your SQL query here
SELECT name, price FROM products WHERE price > (SELECT AVG(price) FROM products);