CREATE TABLE canteen_menu (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100),
    category VARCHAR(50),
    price INT,
    is_available BOOLEAN DEFAULT TRUE
);


INSERT INTO canteen_menu 
(item_name, category, price)
VALUES
('Masala Chai', 'Beverages', 10),
('Coffee', 'Beverages', 20),
('Cold Drink', 'Beverages', 30),
('Samosa', 'Snacks', 15),
('Veg Sandwich', 'Snacks', 40),
('Aloo Paratha', 'Main Course', 50),
('Veg Biryani', 'Main Course', 80),
('Paneer Roll', 'Snacks', 60),
('Chole Bhature', 'Main Course', 70),
('Gulab Jamun', 'Dessert', 30);


UPDATE canteen_menu
SET price = 20
WHERE item_name = 'Masala Chai';


UPDATE canteen_menu
SET price = price - 5
WHERE category = 'Beverages';

UPDATE canteen_menu
SET is_available = FALSE
WHERE item_name = 'Samosa';

DELETE FROM canteen_menu 
WHERE item_name = 'Gulab Jamun';

SELECT * FROM canteen_menu;

-- DML - Data Manipulation language