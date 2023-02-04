function fun() {
  let i = 0;
  const fun01 = () => {
    i++;
  };
  const fun02 = () => {
    console.log(i);
  };
  return { fun01, fun02 };
}
const res = fun();
res.fun01();
res.fun02();
