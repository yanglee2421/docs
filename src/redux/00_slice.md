## 切片

```ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export default demo;
export const { name, reducer, setMes } = demo;
namespace demo {
  export const {
    actions: { setMes },
    name,
    reducer,
  } = createSlice({
    name: "demo",
    initialState,
    reducers: {
      setMes(state, action: PayloadAction<string>) {
        state.mes = action.payload;
      },
    },
  });
}
function initialState() {
  return {
    mes: "默认数据",
  };
}
```
