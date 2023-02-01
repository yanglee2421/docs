function testFx(isErr: boolean) {
  try {
    console.log("try block is called");
    if (!isErr) return 100;
    throw new Error();
  } catch {
    console.log("catch block is called");
    return 1000;
  } finally {
    console.log("finally block is called");
    return 1;
  }
}
testFx(false);
/**
 * try block is called
 * finally block is called
 * returns 1
 */
testFx(true);
/**
 * try block is called
 * catch block is called
 * finally block is called
 * returns 1
 */
