-- Task: Right join reviews with products. Select product name and review comment.

-- solution
-- Write your SQL query here
SELECT p.name , r.comment FROM reviews r RIGHT JOIN products  p ON r.product_id = p.id;
