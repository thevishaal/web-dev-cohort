CREATE TABLE ipl_players (
    player_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    team VARCHAR(50),
    role VARCHAR(50),
    runs_scored INT CHECK(runs_scored >0),
    wickets_taken INT CHECK(wickets_taken >0),
    auction_price_crores INT
);

ALTER TABLE ipl_players 
ADD COLUMN nickname VARCHAR(50);

ALTER TABLE ipl_players           -- to drop constraint check
DROP CONSTRAINT ipl_players_wickets_taken_check;

ALTER TABLE ipl_players
ADD CONSTRAINT ipl_players_wickets_taken_check
CHECK (wickets_taken >= 0);


INSERT INTO ipl_players
    (name, team, role, runs_scored, wickets_taken, auction_price_crores, nickname)
VALUES
    ('Virat Kohli', 'RCB', 'Batsman', 7263, 4, 15, 'King Kohli'),
    ('Rohit Sharma', 'MI', 'Batsman', 6628, 15, 16, 'Hitman'),
    ('MS Dhoni', 'CSK', 'Wicketkeeper', 5243, 0, 12, 'Captain Cool'),
    ('Jasprit Bumrah', 'MI', 'Bowler', 183, 165, 12, 'Boom Boom'),
    ('Ravindra Jadeja', 'CSK', 'All-Rounder', 2959, 160, 16, 'Sir Jadeja'),
    ('Hardik Pandya', 'MI', 'All-Rounder', 2309, 53, 15, 'Kung Fu Pandya'),
    ('KL Rahul', 'LSG', 'Wicketkeeper', 4683, 0, 17, 'KLR'),
    ('Shubman Gill', 'GT', 'Batsman', 3216, 0, 8, 'Prince'),
    ('Rashid Khan', 'GT', 'Bowler', 444, 139, 15, 'Rashid'),
    ('Suryakumar Yadav', 'MI', 'Batsman', 3594, 1, 8, 'SKY'),
    ('Sanju Samson', 'RR', 'Wicketkeeper', 4419, 0, 14, 'Sanju'),
    ('Yuzvendra Chahal', 'RR', 'Bowler', 37, 205, 6, 'Yuvi'),
    ('Ruturaj Gaikwad', 'CSK', 'Batsman', 2380, 0, 6, 'Rutu'),
    ('Andre Russell', 'KKR', 'All-Rounder', 2484, 115, 12, 'Russell'),
    ('Sunil Narine', 'KKR', 'All-Rounder', 1534, 180, 12, 'Narine'),
    ('David Warner', 'DC', 'Batsman', 6565, 0, 6, 'Warner'),
    ('Rishabh Pant', 'LSG', 'Wicketkeeper', 3284, 0, 27, 'Pant'),
    ('Trent Boult', 'MI', 'Bowler', 70, 121, 12, 'Bolt'),
    ('Faf du Plessis', 'RCB', 'Batsman', 4571, 0, 7, 'Faf'),
    ('Axar Patel', 'DC', 'All-Rounder', 1653, 123, 9, 'Axar');



SELECT * FROM ipl_players;

SELECT name, nickname, team FROM ipl_players;



--  Filtering

SELECT * FROM ipl_players WHERE team = 'MI';

SELECT name, nickname, team, auction_price_crores FROM ipl_players WHERE auction_price_crores > 10;


-- LOGICAL OPERATION (AND, OR)

SELECT * FROM ipl_players WHERE wickets_taken > 10 AND role = 'All-Rounder';

SELECT name, team FROM ipl_players WHERE team = 'RCB' OR team = 'CSK';


-- Pattern matching

SELECT * FROM ipl_players WHERE name LIKE '__s%';

SELECT * FROM ipl_players WHERE name ILIKE '__S%';

SELECT * FROM ipl_players WHERE team IN ('MI', 'KKR', 'RCB');

SELECT * FROM ipl_players WHERE auction_price_crores BETWEEN 10 AND 15;


-- sorting

SELECT name, nickname, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC;


SELECT name, team,auction_price_crores
FROM ipl_players
ORDER BY team ASC,  auction_price_crores DESC;


-- pagination

SELECT name, team, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC;


SELECT name, team, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC LIMIT 6;

SELECT name, team, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC LIMIT 3 OFFSET 3;


SELECT name, team, auction_price_crores FROM ipl_players ORDER BY auction_price_crores DESC LIMIT 3 OFFSET 5;

-- Modifying data in runtime

SELECT 
    name, nickname, auction_price_crores,
    (auction_price_crores * 100) AS price_in_lakhs
FROM ipl_players;

SELECT
    name, nickname, (auction_price_crores + 2) AS new_price
FROM ipl_players;


-- how you can get distinct values

SELECT distinct role FROM ipl_players;      -- distinct unique value


-- DQL - Data query language

