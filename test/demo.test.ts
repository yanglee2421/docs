const obj = {
  1: fun,
};
function fun() {
  console.log("neo switch");
}
obj[1]();
Object.keys(obj).forEach((item) => console.log(typeof item));
