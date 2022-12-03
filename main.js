fun();
function fun() {
  console.log("123", a);
}
var a = 1;
{
  function fun() {
    console.log("456", a);
  }
  var a = 2;
}
fun();
console.log(a);
