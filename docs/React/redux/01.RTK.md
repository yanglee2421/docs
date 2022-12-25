# Redux

## 安装

```powershell
yarn add react-redux @reduxjs/toolkit
```

## 案例

```js
function reducer(state, action) {
  switch (action) {
    case 1:
      state.numer = 1;
      break;
    default:
  }
  return { ...state };
}
const store = Redux.createStore(reducer, {});
store.dispatch(1);
store.subscribe(() => {
  store.getState();
});
```
