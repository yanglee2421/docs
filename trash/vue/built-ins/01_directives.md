# 内置指令

## 内容渲染

```vue
<template>
  <div v-cloak>
    <div>{{ variable }}</div>
    <div v-html="vHtml"></div>
    <div v-text="vText"></div>
    <div v-once>{{ variable }}</div>
    <div v-pre>这个元素及其所有子元素不会被vue编译</div>
  </div>
</template>
<script lang="ts" setup>
const variable = "插值表达式";
const vHtml = `<p>插入HTML</p>`;
const vText = `<p>插入HTML</p>`;
</script>
<style scoped>
[v-cloak] {
  display: none !important;
}
</style>
```

## 条件渲染

```vue
<template>
  <p v-if="true">为true有这个节点，反之没有</p>
  <p v-else-if="true">若上为false，则再进行判断</p>
  <p v-else>若以上都为false则有这个节点</p>
  <p v-show="true">为false时，display为none</p>
</template>
```

## 列表渲染

```vue
<template>
  <p v-for="(item, index) in []" :key="index">{{ item }}</p>
  <p v-for="(item, index) in 10" :key="index">{{ item }}</p>
  <p v-for="(item, index) in 'string'" :key="index">{{ item }}</p>
  <p v-for="(value, key) in {}" :key="key">{{ value }}</p>
</template>
```

::: details

- `v-for`
- 能遍历：`str`、`num`、`obj`、`arr`
- 注意
  1. `:key`的值只能是`number`或`string`
  2. `:key`的值不能重复
  3. 常用`id`作为`:key`属性
  4. 不建议用`index`作为`:key`，`arr`的元素排序变化时失去意义
  5. `:key`触发 diff 算法以提升性能

:::

## 属性绑定

```vue
<template>
  <p v-bind="$attrs"></p>
  <p v-bind="{}"></p>
  <p :style="{}"></p>
  <p :style="[{}]"></p>
  <p :class="[""]"></p>
  <p :class="{}"></p>
  <p :class="[{}]"></p>
</template>
```

## 事件绑定

```vue
<template>
  <input @input="($event) => {}" />
  <input @input="fun" />
  <input @input="fun($event)" />
  <input @input="obj.name = $event" />
</template>
<script setup>
function fun() {}
const obj = {};
</script>
```

::: details

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

:::

## 双向绑定

```vue
<template>
  <input v-model="state.inp" />
</template>
<script setup>
import { reactive } from "vue";
const state = reactive({ inp: "" });
</script>
```

::: details

- `v-model`
  > - 设置`input type="text"`的`value`为一个变量
  > - 绑定给`input type=radio`时，指向`name`相同的`radio`中被激活的那一个的`value`
  > - 绑定给单个`input type=checkbox`时，指向`checked`不指向`value`，值只有`true`和`false`
  > - 绑定多个`input type=checkbox`时，`v-model`的值为一个数组，`value`在该数组中的`checkbox`被激活
- 修饰符
  - `.number`，转为`number`类型
  - `.trim`，过滤首尾空格
  - `.lazy`，侦听 change 事件而不是 input 事件

:::
