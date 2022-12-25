# typeorn

## 安装

```powershell
yarn add typeorm
```

## 连接

- 创建一个

```ts
import { DataSource } from "typeorm";

const database = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: ["./entity/**.ts"],
  synchronize: false,
});
import { Table_User } from "@/entity";
database.initialize().then((db) => {
  db.manager.find(Table_User);
});
```

## 实体

- 一个用于映射到数据库表格的 TS 类

```ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Table_User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  user_id: string;

  @Column({ type: "text" })
  user_name: string;

  @Column({ type: "text" })
  user_pwd: string;
}
```

```json
{
  //启用TS装饰器
  "experimentalDecorators": true,
  //允许类中属性不进行初始化
  "strictPropertyInitialization": false
}
```

## 实体管理器的 CURD

```ts

```
