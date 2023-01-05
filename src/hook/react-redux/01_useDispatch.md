# useDispatch

## JS 下

```js
import { useDispatch } from "react-redux";
import { xxxAct } from "@/redux/slice-demo";
function App() {
  const payload = "";
  const dispatch = useDispatch(xxxAct(payload));
}
```

## TS 下

```ts
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/slice-demo";
export const useAppDispatch: () => AppDispatch = useDispatch;
```
