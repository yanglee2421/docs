function resFx(cb: () => void) {
  const res = { cb };
  return res;
}
function cb() {
  obj.cb();
}

const obj = resFx(cb);
