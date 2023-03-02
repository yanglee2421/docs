# sql 基本语法

## 查所有，模糊查询，分页，排序

```sql
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
```

## 插入

```sql
INSERT INTO table_dame
(colum1, colum2) VALUES ($column1, $column2)
RETURNING *;
```

## 删除

```sql
DELETE FROM table_dame
WHERE id = $id
RETURNING *;
```

## 修改

```sql
UPDATE table_dame
SET colum1 = $column1, colum2 = $column2
WHERE id = $id
RETURNING *;
```

## 查单条

```sql
SELECT *
FROM table_dame
WHERE id = $id;
```
