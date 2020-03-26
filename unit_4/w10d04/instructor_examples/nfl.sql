CREATE DATABASE nfl;
\c nfl;
\i nfl/nfl_seed_data/schema.sql;
\i nfl/nfl_seed_data/players.sql;
\i nfl/nfl_seed_data/teams.sql;

---------------------------------------------------
---------------------------------------------------
-- 1. List the names of all NFL teams
SELECT name FROM teams;

-- 2. List the stadium name and head coach of all NFC teams
SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';

-- 3. List the head coaches of the AFC South
SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';

-- 4. The total number of players in the NFL
SELECT COUNT(*) FROM players;

-- 5. The team names and head coaches of the NFC North and AFC East
SELECT name, head_coach FROM teams WHERE (conference = 'NFC' AND division = 'North') OR (conference = 'AFC' AND division = 'East');

-- 6. The 50 players with the highest salaries
SELECT name FROM players ORDER BY salary DESC LIMIT 50;

-- 7. The average salary of all NFL players
SELECT AVG(salary) FROM players;

-- 8. The names and positions of players with a salary above 10_000_000
SELECT name, position FROM players WHERE salary > 10000000;

-- 9. The player with the highest salary in the NFL
SELECT name FROM players ORDER BY salary DESC LIMIT 1;

-- 10. The name and position of the first 100 players with the lowest salaries
SELECT name, position FROM players ORDER BY salary ASC LIMIT 100;

-- 11. The average salary for a DE in the NFL
SELECT AVG(salary) FROM players WHERE position = 'DE';
