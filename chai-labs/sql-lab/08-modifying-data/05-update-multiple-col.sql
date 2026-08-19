-- Task: Click "Reset DB" before starting! Update the user with id=1: set age=29 and city='Boston'.


-- solution

-- Write your SQL query here
UPDATE users
SET age = 29,
    city = 'Boston'
WHERE id = 1;