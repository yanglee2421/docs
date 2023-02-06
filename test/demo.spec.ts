const whiteList = ["/login"];
const isInWhiteList = (str: string) =>
  whiteList.some((item) => str.startsWith(item));
const res = isInWhiteList("/login/xxx");
console.log(res);
