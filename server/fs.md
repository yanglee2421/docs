# fs 模块

- 不用下载，需要引入

```ts
export namespace fs {
  interface _options {
    encoding:string
    mode: 0o111 | 0o222 | 0o444 | 0o333 | 0o555 | 0o666;
    flag:"a"|"w"
  }
  interface _callback{
    (err,res):void
  }
  export const writeFile = (
    path: string,
    options = {
        encoding:"utf8",
        mode:0o666,
        flag:"w"
    }: _options,
    callback: _callback
  ) => {
    return undefined;
  };
}
```
