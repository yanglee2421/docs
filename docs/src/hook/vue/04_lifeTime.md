# 生命周期

## 区别

- `beforeCreate()`和`Created()`没有
- 其余的加个`on`
- 与配置项写法起冲突时，`setup()`里的优先

```js
import {onBeforeMounted} from 'vue'
setup(){
  onBeforeMounted(()=>{})
}
```

## 挂载流程

### onBeforeMount

### onMounted

## 激活流程

### onActivated

### onDeactivated

## 更新流程

### 注意

1. state 发生了变化
2. 需要 Vue 操作 DOM
3. 操作的 DOM 不在子组件之内

### onBeforeUpdate

### onUpdated

### nextTick

## 卸载流程

### onBeforeUnmount

### onUnmounted
