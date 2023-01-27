class GetRandom {
  constructor(min, max) {
    this.min = min;
    this.max = max;
    this.constructor = () => 439;
  }
  get() {
    return Math.random() * (this.max - this.min) + this.min;
  }
}
const gett = new GetRandom(10, 20);
console.log(gett());
console.log(gett.get());
