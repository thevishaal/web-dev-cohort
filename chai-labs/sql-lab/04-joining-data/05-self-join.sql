-- Task: Join employees with themselves to show each employee and their manager name. Select employee name and manager name.


-- solution

-- Write your SQL query here
SELECT 
    e.name AS employee_name,
    m.name AS manager_name
FROM employees e
JOIN employees m
    ON e.manager_id = m.id;