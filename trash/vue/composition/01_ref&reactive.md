# ref & reactive

## ref

- 对原始值参数进行封装，返回一个`refImpl`
- 处理引用类型时，借用了`reactive()`
- 被`ref()`封装的原始值需要以`.value`的形式更改
  JS 中的内容

```js
import { ref } from "vue";
export default {
  setup() {
    let i = ref(1);
    let obj = {
      name: "",
    };
    let arr = [1, 2, 3];
    function fun() {
      i.value++;
      obj.value.name = "213";
      arr.value[0] = 2;
    }
  },
};
```

## reactive

- 参数为引用类型时，返回一个响应式代理`proxy`
- 不同于`ref()`不必再以`.value`调用

```js
const obj = reactive({
  name: "名",
  age: 18,
});
obj.name = "新名";
```

## toRef, toRefs

- 从响应式对象中的属性中取值，返回一个`refimpl`，该`refimpl`与被取的属性值是引用关系

```js
const obj = reactive({
  name: "名字",
});
return { name: obj.name };
/* 此时更改name的值不会触发响应式 */
const name2 = toRef(obj, "name");
return { name: name2 };
/* 此时响应式实现了 */
return { name: toRef(obj, "name") };
/* 简化写法 */
return { name: ref(obj.name) };
/* 这种写法使得返回的数据与源数据丢失了引用关系 */
const refObj = toRefs(obj);
return { ...toRefs(obj) };
/* 把obj中的所有属性变为refimp对象并返回 */
```

## shallowReactive, shallowRef

- `shallowReactive()`只把对象中的第一层数据做成响应式
- `shallowRef()`只把基本数据类型数据做成响应式

```js
const obj = {
  name: "名字",
  obj2: {
    obj3: {
      name: "名字2",
    },
  },
};
/* obj3.name变化不能触发响应式 */
```

## readonly 与 shallowReadonly

- 参数为对象时，返回一个只读代理
- `shallowReadonly()`返回一个浅只读代理

```js
const obj = {
  name: "名字",
};
const obj = readonly(obj);
```

## toRaw 与 markRaw

- `toRaw()`返回一个被`reactive()`、`shallowReactive()`处理过的数据的原始值
- 接收一个对象作为参数，`markRaw()`返回的对象的属性不会继承响应式

```js
const obj = reactive({
  name: "名字",
});
const objOri = toRaw(obj);
obj.age = markRaw({
  value: 18,
});
```

## isRef、isReactive、isReadonly、isProxy

- `isRef()`
- `isReactive()`
- `isReadonly()`
- `isProxy()`

## customRef

- 定义一个自定义的`ref()`

```js
const myRef= (value) => {
    return customRef((track, trigger)=>{
        return {
            get(){
                // 重新解析模板时，要求get()触发一次
                track()
                return value
            }
            set(newValue){
                value = newValue
                // 触发重新解析模板
                trigger()
            }
        }
    })
}
```
