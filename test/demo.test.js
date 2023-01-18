const obj = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};
const [a] = obj;
console.log(a);
const { length } = [];
console.log(length);
