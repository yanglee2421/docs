# 3. 事件绑定

- `v-on`
- `$event`
- 修饰符
  - `.prevent`，取消默认行为
  - `.stop`，阻止事件冒泡
  - `.capture`，以捕获模式触发事件
  - `.once`，事件仅触发一次
  - `.self`，仅在`event.target`是自身时才触发事件
  - `.esc`，按键为 ESC
  - `.enter`，按键为 Enter

# 4. 双向绑定

- `v-model`
  > - 设置`input`标题的`value`为一个变量
  > - 绑定给`input type=radio`时，指向`name`相同的`radio`中被激活的那一个的`value`
  > - 绑定给单个`input type=checkbox`时，指向`checked`不指向`value`，值只有`true`和`false`
  > - 绑定多个`input type=checkbox`时，`v-model`的值为一个数组，`value`在该数组中的`checkbox`被激活
- 修饰符
  - `.number`，转为`number`类型
  - `.trim`，过滤首尾空格
  - `.lazy`，改值时才更新

# 5. 条件渲染

- `v-if`
- `v-else-if`
- `v-else`
- `v-show`

# 6. 列表渲染

- `v-for`
- 能遍历：`str`、`num`、`obj`、`arr`
- 注意
  1. `:key`的值只能是`number`或`string`
  2. `:key`的值不能重复
  3. 常用`id`作为`:key`属性
  4. 不建议用`index`作为`:key`，`arr`的元素减少或时容易出问题
  5. `:key`触发 diff 算法以提升性能
