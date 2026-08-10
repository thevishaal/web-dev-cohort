-- Task: Join orders with users. Select order id, user name, and order quantity.


-- solution
-- Write your SQL query here
SELECT o.id, u.name, o.quantity FROM orders o INNER JOIN users u ON o.user_id = u.id;