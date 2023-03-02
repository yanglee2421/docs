CREATE TABLE table_dame (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    colum1 TEXT(1000) DEFAULT "",
    colum2 TEXT(1000) NOT NULL
);

SELECT * 
FROM table_dame 
WHERE 
colum1 LIKE %$column1%
colum2 LIKE %$column2% 
LIMIT $size 
OFFSET $page
ORDER BY
colum1 ASC,
colum2 DESC;

INSERT INTO table_dame 
(colum1, colum2) VALUES ($column1, $column2) 
RETURNING *;

DELETE FROM table_dame 
WHERE id = $id 
RETURNING *;

UPDATE table_dame 
SET colum1 = $column1, colum2 = $column2 
WHERE id = $id 
RETURNING *;

SELECT * 
FROM table_dame 
WHERE id = $id;