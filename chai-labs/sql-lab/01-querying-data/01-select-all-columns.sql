-- Task: Select all columns from the users table to see customer data including id, name, email, phone, age, country, and city.


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(322) UNIQUE NOT NULL,
    phone VARCHAR(15),
    age INT CHECK(age >= 12),
    country VARCHAR(100),
    city VARCHAR(100)
);


INSERT INTO users (name, email, phone, age, country, city)
VALUES
('Aarav Sharma', 'aarav.sharma@example.com', '9876543210', 22, 'India', 'Meerut'),
('Priya Verma', 'priya.verma@example.com', '9876543211', 25, 'India', 'Delhi'),
('Rahul Singh', 'rahul.singh@example.com', '9876543212', 28, 'India', 'Lucknow'),
('Ananya Gupta', 'ananya.gupta@example.com', '9876543213', 21, 'India', 'Jaipur'),
('Vikram Yadav', 'vikram.yadav@example.com', '9876543214', 30, 'India', 'Noida'),
('Sneha Kapoor', 'sneha.kapoor@example.com', '9876543215', 24, 'India', 'Mumbai'),
('Rohan Mehta', 'rohan.mehta@example.com', '9876543216', 27, 'India', 'Pune'),
('Neha Agarwal', 'neha.agarwal@example.com', '9876543217', 23, 'India', 'Bengaluru'),
('Aditya Joshi', 'aditya.joshi@example.com', '9876543218', 26, 'India', 'Dehradun'),
('Kavya Malhotra', 'kavya.malhotra@example.com', '9876543219', 20, 'India', 'Chandigarh'),
('Arjun Patel', 'arjun.patel@example.com', '9876543220', 29, 'India', 'Ahmedabad'),
('Isha Mishra', 'isha.mishra@example.com', '9876543221', 19, 'India', 'Varanasi'),
('Karan Bansal', 'karan.bansal@example.com', '9876543222', 32, 'India', 'Gurugram'),
('Pooja Saini', 'pooja.saini@example.com', '9876543223', 18, 'India', 'Agra'),
('Mohit Kumar', 'mohit.kumar@example.com', '9876543224', 35, 'India', 'Kanpur');


--  solution

SELECT * FROM users;