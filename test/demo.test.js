const a = {
  i: 1,
  toString() {
    return this.i++;
  },
};

if (a == 1 && a == 2 && a == 3) {
  console.log("Hello World!");
}
// by stackoverflow

function add(...restParams) {}

console.log(curry(1)(2)(3));
console.log(curry(1, 2)(3));
console.log(curry(1, 2, 3));
