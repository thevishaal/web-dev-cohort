CREATE TABLE smart_watch_sales (
    sale_id SERIAL PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(100),
    city VARCHAR(50),
    units_sold INT,
    price_per_unit DECIMAL(10,2),
    sale_date DATE
);


INSERT INTO smart_watch_sales 
(brand, model, city, units_sold, price_per_unit, sale_date)
VALUES
('Apple', 'Watch Series 9', 'Delhi', 25, 42999.00, '2026-01-05'),
('Samsung', 'Galaxy Watch 6', 'Mumbai', 18, 28999.00, '2026-01-08'),
('Noise', 'ColorFit Pro 5', 'Meerut', 35, 3999.00, '2026-01-12'),
('boAt', 'Lunar Pro', 'Bangalore', 42, 2999.00, '2026-01-15'),
('Fire-Boltt', 'Phoenix Ultra', 'Lucknow', 30, 3499.00, '2026-01-20'),
('Garmin', 'Venu 3', 'Hyderabad', 12, 44999.00, '2026-01-23'),
('Fossil', 'Gen 6', 'Pune', 15, 19999.00, '2026-01-28'),
('Amazfit', 'GTR 4', 'Jaipur', 20, 16999.00, '2026-02-02'),
('Apple', 'Watch SE', 'Chennai', 28, 29999.00, '2026-02-06'),
('Samsung', 'Galaxy Watch 5', 'Kolkata', 22, 24999.00, '2026-02-10'),
('Noise', 'Voyage', 'Delhi', 38, 4999.00, '2026-02-14'),
('boAt', 'Wave Ultima', 'Mumbai', 45, 2799.00, '2026-02-18'),
('Fire-Boltt', 'Visionary', 'Bangalore', 33, 4499.00, '2026-02-22'),
('Garmin', 'Forerunner 255', 'Hyderabad', 10, 32999.00, '2026-02-25'),
('Fossil', 'Gen 5', 'Pune', 17, 15999.00, '2026-03-01'),
('Amazfit', 'GTS 4', 'Lucknow', 24, 14999.00, '2026-03-05'),
('Apple', 'Watch Ultra 2', 'Jaipur', 8, 89999.00, '2026-03-10'),
('Samsung', 'Galaxy Watch 6 Classic', 'Chennai', 16, 39999.00, '2026-03-15'),
('Noise', 'ColorFit Ultra 3', 'Meerut', 40, 4499.00, '2026-03-20'),
('boAt', 'Storm Call', 'Kolkata', 50, 2499.00, '2026-03-25');


SELECT * FROM smart_watch_sales;


SELECT COUNT(*) AS total_rows FROM smart_watch_sales;

SELECT SUM(units_sold * price_per_unit) AS total_revenue FROM smart_watch_sales;

SELECT AVG(price_per_unit) AS avg_price_per_unit FROM smart_watch_sales;


SELECT MIN(price_per_unit) AS cheapest FROM smart_watch_sales;


SELECT MAX(price_per_unit) AS mehenga FROM smart_watch_sales;

SELECT brand, SUM(units_sold) AS total_units_sold
FROM smart_watch_sales
GROUP BY brand;


SELECT brand, SUM(units_sold) AS total_units_sold
FROM smart_watch_sales
GROUP BY brand
ORDER BY total_units_sold DESC;


SELECT city, SUM(units_sold * price_per_unit) 
FROM smart_watch_sales
GROUP BY city;


SELECT city,brand ,SUM(units_sold * price_per_unit) AS total_revenue_by_city_and_brand
FROM smart_watch_sales
GROUP BY city, brand
ORDER BY total_revenue_by_city_and_brand DESC;


-- TODO:- Using Having keyword
