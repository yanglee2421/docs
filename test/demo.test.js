/**
 * 1. 实例的__proto__指向其constructor的prototype
 * 2. 访问实例的属性时，若实例本身上没有，
 * 而会从其__proto__寻找，
 * 它的__proto__中没有，则从__proto__.__proto继续
 * 直到找到原型链的末端
 * 3. 任何对象原型链的末端都是Object.prototype
 * 4. Object.prototype.__proto__ === null
 */
class Person {}
const person = new Person();

person.__proto__ === Person.prototype;
// true
person.__proto__.__proto__ === Object.prototype;
// true
typeof Person;
// function
Person === Person.prototype.constructor;
// true
