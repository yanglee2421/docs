# 类
## 静态属性
~~~ts
class Person {
    /*
    这是构造函数的属性，且仅读
    (readonly关键字在原生JS中不受支持)
    */
    static readonly age:number = 18
    //这是所有实例都有的属性
    age:number = 19
    //这是单个实例独自拥有的属性
    constructor(age:number){
        this.age:number = age
    }
}
~~~