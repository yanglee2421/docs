# useSelector

## JS 下

```js
import { useSelector } from "react-redux";
function App() {
  const state = useSelector((store) => store.state);
}
```

## TS 下

```ts
import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "@/redux/root-store";
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```
