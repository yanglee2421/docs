interface inter {
    name: string
    age: number
}
class Person implements inter {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
const obj: inter = {
    name: "string",
    age: 123,
}
class Animal {
    private _name = "123"
    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }
}