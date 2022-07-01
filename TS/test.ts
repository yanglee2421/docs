const reg = /^[\.\d]*$/g
// const res = reg.test("..s ....")
let str = "1658413.13514....513134131"
const res = Number.parseFloat(str)

console.log(res);
