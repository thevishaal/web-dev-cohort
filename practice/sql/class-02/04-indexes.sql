CREATE TABLE marks (
    id SERIAL PRIMARY KEY,
    name TEXT,
    marks INT NOT NULL
);



-- random generate 1M records

INSERT INTO marks (name, marks)
SELECT
    'Student ' || i,
    floor(random() * 101)::INT
FROM generate_series(1, 1000000) AS i;

SELECT COUNT(*) FROM marks;
SELECT * FROM marks;

EXPLAIN ANALYZE SELECT * FROM marks WHERE name =  'Student 666326';

CREATE INDEX idx_name ON marks (name);
DROP INDEX idx_name;

-- non-key value index
CREATE INDEX idx_name ON marks (name) INCLUDE (marks);

