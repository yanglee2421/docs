/**
 * Another way of writing settimeout, does not support cancellation
 * @param time delay in milliseconds
 * @returns a promise that don`t have resolve
 */
function timeout(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
