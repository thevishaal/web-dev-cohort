-- Task: Select all columns from the products table and sort by price in ascending order (cheapest first).


CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    category_id INT REFERENCES categories(id),
    supplier_id INT REFERENCES suppliers(id),
    price DECIMAL(10,2),
    stock INT
);

-- solution
-- Write your SQL query here
SELECT * FROM products ORDER BY price ASC;