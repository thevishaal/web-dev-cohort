-- DROP TABLE students;


CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(322),
    branch VARCHAR(50)
);


INSERT INTO students (name, email, branch) VALUES
('Aarav Sharma', 'aarav.sharma@example.com', 'CSE'),
('Priya Verma', 'priya.verma@example.com', 'ECE'),
('Rohan Singh', 'rohan.singh@example.com', 'ME'),
('Ananya Gupta', 'ananya.gupta@example.com', 'CSE'),
('Karan Mehta', 'karan.mehta@example.com', 'IT'),
('Sneha Yadav', 'sneha.yadav@example.com', 'EE'),
('Aditya Kumar', 'aditya.kumar@example.com', 'CSE'),
('Neha Agarwal', 'neha.agarwal@example.com', 'CE'),
('Rahul Mishra', 'rahul.mishra@example.com', 'IT'),
('Ishita Jain', 'ishita.jain@example.com', 'ECE');


CREATE TABLE profiles (
    profile_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    avatar_url VARCHAR(322),

    student_id INT REFERENCES students(student_id) ON DELETE CASCADE
);


CREATE TABLE internships (
    internship_id SERIAL PRIMARY KEY,
    company_name VARCHAR(100),
    role VARCHAR(50),
    stipend INT CHECK (stipend > 1000),
    status VARCHAR(20) CHECK (status in ('selected', 'pending', 'rejected')),

    student_id INT REFERENCES students(student_id) ON DELETE SET NULL
);

INSERT INTO internships (company_name, role, stipend, status, student_id) VALUES
('TCS', 'Software Intern', 15000, 'selected', 1),
('Infosys', 'Web Developer', 12000, 'selected', 2),
('Wipro', 'Backend Intern', 10000, 'pending', 3),
('Accenture', 'Data Analyst', 18000, 'selected', 4),
('HCLTech', 'Java Intern', 9000, 'rejected', 5),
('Deloitte', 'Cloud Intern', 20000, 'selected', 6),
('Cognizant', 'Software Intern', 14000, 'pending', 7),
('Tech Mahindra', 'Frontend Intern', 11000, 'rejected', 8),
('IBM', 'AI/ML Intern', 25000, 'selected', 9),
('Capgemini', 'Testing Intern', 13000, 'pending', 10);


-- DROP TABLE internships;
SELECT * FROM internships;
SELECT * FROM students;

SELECT 
    s.student_id,
    s.name,
    s.branch,
    i.company_name,
    i.role,
    i.stipend
FROM students AS s
INNER JOIN internships AS i ON s.student_id = i.internship_id
LIMIT 3;
