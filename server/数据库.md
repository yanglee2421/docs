# 数据库

- 程序 = 算法 + 数据结构

## 数据持久化

```sql
SELECT column FROM db_table WHERE age = 18
```

## 端口号

- http 默认端口：80
- https 默认端口：443
- SSH 默认端口：22

## MongoDB 原生 CRUD

### create（C）

- db.集合名.insert(文档对象)
  - db.students.insert({name:'张三', age:18})
- db.集合名.insertOne(文档对象)
  - db.students.insertOne({name:'李四', age:19})
- db.集合名.insertMany([文档对象，文档对象])
  - db.students.insertMany([{}, {}])

### read（R）

- db.集合名.find(查询条件[, 投影])
  - db.students.find({age:18}, {age:0, name:0})
  - db.students.find({age:18,name:"jack"}, {age:1, name:1})
  - db.students.find({age:{$gte:19}})
  - db.students.find({age:{$in:[19, 20]}})
  - db.students.find({$or:[{age:19}, {age:20}]})
  - db.students.find({name:/张/})
  - db.students.find({$where:function(){
    return this.name === 18 && this.age ===19
    }})

### 常用操作符

|   操作符   |   特殊属性    |
| :--------: | :-----------: |
|    `<`     |      $lt      |
|    `<=`    |     $lte      |
|    `>`     |      $gt      |
|    `>=`    |     $gte      |
|   `!==`    |      $ne      |
|   `\|\|`   |    $in,$or    |
|    `!`     | $nin(参考$in) |
|    正则    |      //       |
| `function` |    $where     |

### update（U）

- db.集合名.update(查询条件, 修改[, 配置对象])
  - db.students.update(查询条件, {age:18})替换整个文档对象
  - db.students.update(查询条件, {$set:{age:18}})仅替换给出的属性
- db.集合名.updateOne(查询条件, 修改[, 配置对象])
- db.集合名.updateMany(查询条件, 修改[, 配置对象])

### delete（D）

- db.集合名.remove(查询条件)

## mongoose

### 连接

```js
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const promise = new Promise((resolve) => {
  mongoose.connect("mongodb://localhost:27017/数据库名", {
    useNewUrlParser: true,
  });
  mongoose.connection.on("open", (err) => {
    console.log(err ? err : "数据库连接成功");
    resolve();
  });
});
```

### 约束

- 数据类型
- 是否必填
- 是否唯一
- 默认值

```js
promise.then(() => {
  const schema = new mongoose.Schema({
    stu_id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    hobby: [String],
    info: {
      type: Schema.Types.Mixed,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    enable_flag: {
      type: String,
      default: "Y",
    },
  });
  /**
   * 一参：集合名
   * 二参：约束
   */
  return mongoose.model("集合名", studentSchema);
});
```

### Create

- create(文档对象, 回调函数)
- create(文档对象):Promise

```js
promise.then().then(
  (model) => {
    /**
     * 不指定回调作为二参时，返回一个promise对象
     */
    model.create({
      stu_id: "183001040333",
      name: "张三",
      age: 18,
      sex: "男",
      hobby: ["女", "抽烟", "喝酒", "烫头"],
      info: 666,
      enable_flag: "Y",
    });
  },
  (err, data) => {
    console.log(err ? err : data);
  }
);
```

### Read

- find(查询条件[, 投影]):`Record<string, unknow>[]`
- findOne(查询条件[, 投影]):null:`Record<string, unknow>`

```js
promise.then().then((model) => {
  model.find({ age }, (err, data) => {});
});
```

### Update

- updateOne(查询条件, 要更新的内容[, 配置对象])
- updateMany(查询条件, 要更新的内容[, 配置对象])

### Delete

- deleteOne(查询条件)
- deleteMany(查询条件)
