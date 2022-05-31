# 1. `scoped`
~~~vue
<style scoped>
/* 需要对子元素内的元素也生效 */
:deep(.className) {}
/* 在全局中注册 */
:global(#idName) {}
</style>
~~~
# 2. `v-bind`
~~~vue
<style>
.box {
    height:v-bind()
}
</style>
~~~