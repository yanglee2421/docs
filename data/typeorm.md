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

@Entity({ name: "Table_User" })
export default class User {
  @PrimaryGeneratedColumn("uuid")
  user_id: string;

  @Column({ type: "text", length: 20 })
  user_name: string = "default user_name";

  @Column({ type: "text", length: 16 })
  user_pwd: string = "default user_pwd";
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

### 实体管理器的 CURD

- 增&改

```ts
const user = new User();
user.user_name = "";
user.user_pwd = "";
db.manager.save([user]).then((res) => {});
```

- 查

```ts
db.manager.findOne(User, {
  where: [
    {
      user_age: MoreThanOrEqual(18),
      user_name: Like("张%"),
    },
  ],
});
db.manager.find(User, {
  where: [{ user_age: MoreThanOrEqual(18) }, { user_name: Like("%张%") }],
  skip: 20 * 0,
  take: 20,
  order: {
    user_age: "desc", //倒序
    id: "asc",
  },
});
```

- 删

```ts
db.manager.remove(User, user);
```

- 改

```ts
/**
 * 通过user_id查找条目，并修改它的user_name和user_pwd
 */
db.manager.update(User, { user_id: "" }, { user_name: "张三", user_pwd: "" });
```

- 增

```ts
const user = new User();
db.manager.insert(User, [user]);
```
