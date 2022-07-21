# 阻止默认事件
- `event.preventDefault()`
# 消除冒泡
- `event.stopPropagation()`
# 坐标
- ``
# 事件监听器
- `addEventListener(event,callback,options)`
~~~js
const a = document.querySelector("a")
a.addEventListener("click",()=>{},{
    capture:true,
    once:true,
})
~~~
- `removeEventListener(event,callback,options)`
~~~js
const fun = ()=>{}//需要移除时必须指定方法的指向
const a = document.querySelector("a")
a.addEventListener("click", fun, {
    capture:true,
    once:true,
})
a.removeEventListener("click", fun, {
    capture:false,//仅此项影响移除监听能否成功
})//移除失败
a.removeEventListener("click", fun, {
    capture:true,//仅此项影响移除监听能否成功
})//移除成功
~~~