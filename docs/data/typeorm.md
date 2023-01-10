# typeorn

## 安装

```powershell
yarn add typeorm
```

## 连接

- 创建一个数据源

```ts
import { DataSource } from "typeorm";
import { Table_User } from "@/entity";
const database = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: ["./entity/**.ts"],
  synchronize: false,
});
database.initialize().then((db) => {
  db.manager.find(Table_User);
});
```

## 实体

- 需要开启 TS Decorators 功能
- 本质一个用于映射到数据库表格的 TS 类

```json
{
  //启用TS装饰器
  "experimentalDecorators": true,
  //允许类中属性不进行初始化
  "strictPropertyInitialization": false
}
```

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

## manager

### hasId

- 检查实例是否有 Id

```ts
db.manager.hasId(user);
```

### getId

- 返回实例的 Id

```ts
db.manager.getId(user);
```

### create

- 生成实例的另一种写法

```ts
const user = manager.create(User); // same as const user = new User();
const user = manager.create(User, {
  id: 1,
  firstName: "Timber",
  lastName: "Saw",
});
// same as const user = new User(); user.firstName = "Timber"; user.lastName = "Saw";
```

### merge

- 进行对象合并

```ts
const user = new User();
manager.merge(User, user, { firstName: "Timber" }, { lastName: "Saw" });
// same as user.firstName = "Timber"; user.lastName = "Saw";
```

### preload

### save

- 增 & 改

```ts
db.manager.save(user);
user.user_name = "xxx";
db.manager.save([user]);
```

### remove

- 移除

```ts
db.manager.remove(user);
db.manager.remove([user1, user2]);
```

### insert

- 增

```ts
await manager.insert(User, { firstName: "Timber", lastName: "Timber" });
await manager.insert(User, [
  { firstName: "Foo", lastName: "Bar" },
  { firstName: "Rizz", lastName: "Rak" },
]);
```

### update

- 改

```ts
await manager.update(User, { age: 18 }, { category: "ADULT" });
// executes UPDATE user SET category = ADULT WHERE age = 18
await manager.update(User, 1, { firstName: "Rizzrak" });
// executes UPDATE user SET firstName = Rizzrak WHERE id = 1
```

### delete

- 删除

```ts
await manager.delete(User, 1);
await manager.delete(User, [1, 2, 3]);
await manager.delete(User, { firstName: "Timber" });
```

### count

- 返回查询的总条数
- 入参同 find

```ts
const count = await manager.count(User, {
  where: { firstName: "Timber" },
});
```

### countBy

```ts
const count = await manager.countBy(User, { firstName: "Timber" });
```

### find

- 查

```ts
db.manager.find(User, {
  where: [{ user_age: MoreThanOrEqual(18) }, { user_name: Like("%张%") }],
  skip: 20 * 0,
  take: 20,
  order: {
    user_age: "desc", //倒序
    id: "asc",
  },
  cache: true,
});
```

### findBy

```ts
const timbers = await manager.findBy(User, { firstName: "Timber" });
```

### findAndCount

```ts
const [timbers, timbersCount] = await manager.findAndCount(User, {
  where: { firstName: "Timber" },
});
```

### findOne

```ts
db.manager.findOne(User, { where: [{ user_name: Like("张%") }] });
```

### findOneOrFail

```ts
const timber = await manager.findOneOrFail(User, {
  where: { firstName: "Timber" },
});
```

### findOneByOrFail

```ts
const timber = await manager.findOneByOrFail(User, { firstName: "Timber" });
```

### findAndCount

```ts
const [timbers, timbersCount] = await manager.findAndCount(User, {
  firstName: "Timber",
});
```

### clear

- 清除表中所有数据

```ts
await manager.clear(User);
```
