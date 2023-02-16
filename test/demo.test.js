class Promise0 {
  constructor(callback) {
    callback(
      (param) => this.commitFulfilled(param),
      (param) => this.commitRejected(param)
    );
  }

  commitFulfilled(param) {
    queueMicrotask(() => {
      const result = this.onFulfilled?.(param);
      this.nextFulfilled?.(result);
    });
  }
  commitRejected(param) {
    queueMicrotask(() => {
      const reason = this.onRejected?.(param);
      this.nextRejected?.(reason);
    });
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
    return new Promise0((nextFulfilled, nextRejected) => {
      this.nextFulfilled = nextFulfilled;
      this.nextRejected = nextRejected;
    });
  }
  catch(onRejected) {
    return this.then(() => {}, onRejected);
  }
}

new Promise0((res) => setTimeout(() => res("结果"), 2000))
  .then((res) => console.log(1, res))
  .then((res) => console.log(1, res));
