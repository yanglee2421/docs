# slot

- 普通用法
  - 声明
  ```vue
  <solt>
      当插槽没有被使用时，此处的内容会显示出来
  </solt>
  ```
  - 调用
  ```vue
  <template>
    <myComponents>
      <h1>将此标签嵌入到插槽的位置</h1>
    </myComponents>
  </template>
  ```
- 具名插槽
  - 声明
  ```vue
  <solt name="名字"></solt>
  ```
  - 调用
  ```vue
  <template>
    <myComponents>
      <template v-solt:名字></template>
      <template #名字></template>
    </myComponents>
  </template>
  ```
- 作用域插槽
  > 由子组件向父组件传参，若要传多个参可用解构赋值
  - 声明
  ```vue
  <solt :info="variable"></solt>
  ```
  - 调用
  ```vue
  <template>
    <my-components>
      <template #default="{ info }">
        {{ info }}
      </template>
    </my-components>
  </template>
  ```
