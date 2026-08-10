-- Task: Left join products with reviews. Select product name and review rating. Include products with no reviews.


-- solution

-- Write your SQL query here
SELECT o.id, u.name, o.quantity FROM orders o INNER JOIN users u ON o.user_id = u.id;