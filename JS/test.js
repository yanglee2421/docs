"use strict"
function Person() {
    const obj = {}
    const arr = Array.from(arguments)
    obj.name = arr[0]
    obj.age = arr[1]
    return obj
}
const a = Person("名", 19)
console.log(a);