-- SELECT airports.id, airports.city, airports.name, routes.dest_id FROM airports JOIN routes on airports.id = origin_id WHERE routes.origin_id = 3797 or routes.origin_id = 3697 AND routes.dest_id = 1382 OR routes.dest_id = 1386 LIMIT 25;

-- SELECT airports.id, airports.city, airports.name, routes.dest_id FROM airports JOIN routes on airports.id = origin_id WHERE routes.origin_id = 3797 or routes.origin_id = 3697 AND routes.dest_id = 1382 OR routes.dest_id = 1386 LIMIT 25;

SELECT * FROM airports WHERE city = 'New York';
SELECT * FROM airports WHERE city = 'Paris';
