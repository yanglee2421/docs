# 选项式写法

## 0. `name`

```vue
<script>
export default {
  name: "组件名",
};
</script>
```

---

## 1. `props`

- 简单用法

```vue
<script>
export defalut {
    props:[]
}
</script>
```

- 高级用法

```vue
<script>
export default {
  props: {
    variable: {
      type: "该类型的构造函数",
      required: true,
      default: "默认值",
      //自定义函数验证
      fun() {
        //返回Boolean，表示是否通过
        return true;
      },
    },
  },
  //prop是只读的，需要做修改时可以将其复制一份到data中
  data() {
    return {
      num: this.variable,
    };
  },
};
</script>
```

## 2. `methods`

```vue
<script>
export defalut {
    methods:{
        fun(){}
    }
}
</script>
```

## 3. `data()`

```vue
<script>
export default {
  data() {
    return {
      variable: "值",
    };
  },
};
</script>
```

## 4. `computed`

- 方法内`this`后的属性的依赖发生变化时，方法会被执行一次

```vue
<script>
export default {
  computed: {
    var() {
      return this.var + 1;
    },
    var2: {
      get() {
        return this.var;
      },
      set(newVal) {
        this.var = newVal;
      },
    },
  },
};
</script>
```

## 5. `watch`

- 普通用法

```vue
<script>
export default {
  watch: {
    variable(newNum, oldNum) {},
  },
};
</script>
```

- 高级用法

```vue
<script>
export default {
  watch: {
    variable: {
      //加载时调用
      immediate: true,
      //深度监测
      deep: true,
      handler(newNum, oldNum) {},
    },
  },
};
</script>
```

## 6. `components`

```vue
<script>
export default {
  components: {
    componentName,
  },
};
</script>
```

## 7. `emits`

```vue
<script>
export default {
  // 声明自定义事件
  emits: ["事件名"],
  methods: {
    fun() {
      // 触发自定义事件,并将第二个参数(可选)作为事件方法的$event
      this.$emit("事件名", this.variable);
    },
  },
};
</script>
```

## 8. `directives`

- 把生命周期钩子封装成一个类名
- 每个钩子里都有四个参数
  - `el`，DOM 元素
  - `binding`，包含以下属性的对象
    - `instance`，使用此指令的组件实例
    - `value`，指令的值
    - `oldValue`，旧值（仅更新的两个钩子可用）
    - `arg`，指令的参数
    - `modifiers`，修饰符
    - `dir`，指令对象
  - `vnode`，虚拟 DOM
  - `prevVnode`，上一个虚拟 DOM（仅 update 中有效）

```vue
<script>
export default {
  directives: {
    variable: {
      created() {},
      beforeMount() {},
      Mount() {},
      BeforeUpdate() {},
      updated() {},
      // Vue2
      beforeDestory() {},
      destoryed() {},
      // Vue3
      BeforeUnmount() {},
      Unmounted() {},
    },
  },
};
</script>
```

## 9. Vue 生命周期

```vue
<script>
export default {
  //初始化生命周期、事件，数据代理尚未开始
  beforeCreate() {}, //配置项不能用
  //初始化数据监测和数据代理
  created() {}, //配置项能用了
  //解析模板，生成Vnode；若存在el，则开始render；反之，停在这里
  beforeMount() {}, //显示原始html
  //Vnode转DOM-Node
  Mount() {}, //展示Vue初次编译的DOM
  //
  BeforeUpdate() {}, //数据是新的，页面是旧的
  //根据新数据生成新的Vnode、diff比较、re-render
  updated() {}, //数据是新的，页面也是新的
  // keep-alive
  activated() {},
  deactivated() {},
  // Vue2
  beforeDestory() {},
  destoryed() {},
  // Vue3，app.unmount()被调用、v-if为假值
  BeforeUnmount() {}, //配置项中的内容还在，但数据的变动不会再触发render
  //移除所有的监测，子组件，自定义事件
  Unmounted() {}, //vm不可用
};
</script>
```

## 10. `provide、inject`

- 非响应式

```vue
<script>
export default {
  provide: {
    key: "值",
  },
  inject: ["key"],
};
</script>
```

- 响应式写法

```vue
<script>
import { computed } from "vue";
export default {
  provide() {
    return {
      key: () => this.variable,
    };
  },
  inject: { newName: "key" },
  computed: {
    useName() {
      return this.newName();
    },
  },
};
</script>
```

- 传递的过程中并不会为参数添加`get()`和`set()`，原本有就有，反之则无

## 12. `mixin`

- 组件间复用配置项

```js
import options1 from "./file";
import options2 from "./file";
export default {
  mixin: [options1, options2],
};
/*
除生命周期以外的配置项发生冲突时
以组件本身的为主
生命周期则会共存
同一个阶段内，先执行组件自身的，后执行mixin引入的
*/
```

## `filters`

- 不需要传参时

```html
<p>{{ time | fmtTime }}</p>
<script>
  export default {
    filters: {
      fmtTime(value) {
        return value + "";
      },
    },
  };
</script>
```

- 需要传参时

```html
<p>{{ time | fmtTime(params) }}</p>
<script>
  export default {
    filters: {
      fmtTime(value, params) {
        return value + params;
      },
    },
  };
</script>
```

- 允许串连

```html
<p>{{ value | filter1 | filter2 }}</p>
```

- `v-bind`可以
- `v-model`不行
